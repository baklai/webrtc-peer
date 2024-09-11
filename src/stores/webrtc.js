import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Peer } from 'peerjs';
import { useToast } from 'vue-toastification';

import { dateTimeToUnix } from '@/utils/index';

export const useWebRTCStore = defineStore('webrtc', () => {
  const $toast = useToast();

  const peer = ref(null);
  const peerId = ref(null);
  const connect = ref(null);

  const messages = ref([]);

  const isConnect = computed(() => {
    return connect.value && connect.value.open;
  });

  function initialize() {
    peer.value = new Peer(null, { debug: 2 });

    peer.value.on('open', id => {
      if (peer.value.id === null) {
        $toast.info('Received null id from peer open');
        console.info('Received null id from peer open');
        peer.value.id = peerId.value;
      } else {
        peerId.value = peer.value.id;
      }
      console.info('ID: ' + peer.value.id);
    });

    peer.value.on('connection', connection => {
      if (connect.value && connect.value.open) {
        connection.on('open', () => {
          connection.send('Already connected to another client');
          setTimeout(() => {
            messages.value = [];
            connection.close();
          }, 500);
        });
        return;
      }
      connect.value = connection;
      $toast.info('Connected to: ' + connect.value.peer);
      console.log('Connected to: ' + connect.value.peer);
      console.log('Status: Connected');
      ready();
    });

    peer.value.on('disconnected', () => {
      $toast.warning('Connection lost. Please reconnect');
      console.log('Connection lost. Please reconnect');
      peer.value.id = peerId.value;
      peer.value._lastServerId = peerId.value;
      peer.value.reconnect();
    });

    peer.value.on('close', () => {
      connect.value = null;
      messages.value = [];
      $toast.warning('Connection destroyed');
      console.log('Connection destroyed');
    });

    peer.value.on('error', err => {
      console.error(err.messages);
    });
  }

  function ready() {
    connect.value.on('data', data => {
      console.log('Input message:', data);
      messages.value.push({ ...data, type: 'in' });
    });

    connect.value.on('open', () => {
      $toast.info('Connection open:', connect.value.open);
      console.log('Connection open:', connect.value.open);
    });

    connect.value.on('close', () => {
      $toast.warning('Connection closed');
      console.log('Connection closed');
      messages.value = [];
      connect.value = null;
    });
  }

  function join(peerID) {
    if (connect.value) {
      connect.value.close();
    }

    connect.value = peer.value.connect(peerID, {
      reliable: true
    });

    connect.value.on('open', () => {
      $toast.info('Connected to: ' + connect.value.peer);
      console.log('Connected to: ' + connect.value.peer);
    });

    connect.value.on('data', data => {
      console.log('Input message:', data);
      messages.value.push({ ...data, type: 'in' });
    });

    connect.value.on('close', () => {
      $toast.warning('Connection closed');
      console.log('Connection closed');
      messages.value = [];
      connect.value = null;
    });
  }

  function connectToPeer(peerID) {
    peer.value.on('connection', connection => {
      connection.on('open', () => {
        connection.send('Sender does not accept incoming connections');
        setTimeout(() => {
          connection.close();
        }, 500);
      });
    });

    join(peerID);
  }

  function desconnectFromPeer() {
    console.log(peer);
    if (connect.value && connect.value.close) {
      console.log('Connection is closed');
      connect.value.close();
      connect.value = null;
    }
  }

  function sendMessage(msg) {
    if (connect.value && connect.value.open) {
      const sendMsgData = {
        message: msg,
        datetime: dateTimeToUnix(new Date())
      };
      console.log('Output message:', sendMsgData);
      connect.value.send({ ...sendMsgData });
      messages.value.push({ ...sendMsgData, type: 'out' });
    } else {
      $toast.warning('Connection is closed');
      console.log('Connection is closed');
    }
  }

  function clearMessages() {
    messages.value = [];
    $toast.info('Messages clear!');
  }

  return {
    peerId,
    connect,
    messages,
    isConnect,
    initialize,
    connectToPeer,
    desconnectFromPeer,
    clearMessages,
    sendMessage
  };
});
