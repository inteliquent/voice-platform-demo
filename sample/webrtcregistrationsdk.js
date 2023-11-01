var wsServers = [
          'wss://proxy-webrtc01.vo.sip.global:7443',
          'wss://proxy-webrtc02.vo.sip.global:7443'
        ];
        window.ua = new SIP.UA({
          log: {
            builtinEnabled: false
          },
          displayName: $scope.session.account.name,
          dtmfType: SIP.C.dtmfType.RTP,
          uri: $scope.sipUsername+'@yourinteliquentdomain',
          authorizationUser: $scope.sipUsername,
          password: $scope.sipPassword,
          transportOptions: {
            wsServers: wsServers,
            traceSip: false
          },
          contactTransport: "wss",
          //hackIpInContact: true,
          sessionDescriptionHandlerFactoryOptions: {
            constraints: {
              audio: true,
              video: false
            },
            alwaysAcquireMediaFirst: true,
            peerConnectionOptions: {
              rtcConfiguration: {
                rtcpMuxPolicy: 'negotiate',
                iceServers: [
                  {
                    url: 'stun:206.147.198.31:3478'
                  },
                  {
                    url: 'turn:206.147.198.31:3478?transport=udp',
                    username: '1234567890_askaboutthisvalue',
                    credential: 'XYZABCDEF_askaboutthisvalue'
                  },
                  {
                    url: 'turn:206.147.198.31:3478?transport=tcp',
                    username: '1234567890_askaboutthisvalue',
                    credential: 'XYZABCDEF_askaboutthisvalue'
                  },
                  {
                    url: 'stun:206.147.130.29:3478'
                  },
                  {
                    url: 'turn:206.147.130.29:3478?transport=udp',
                    username: '1234567890_askaboutthisvalue',
                    credential: 'XYZABCDEF_askaboutthisvalue'
                  },
                  {
                    url: 'turn:206.147.130.29:3478?transport=tcp',
                    username: '1234567890_askaboutthisvalue',
                    credential: 'XYZABCDEF_askaboutthisvalue'
                  }
                ]
              }
            }
          },
          register: true,
          registerOptions: {
            expires: 60
          }
        });
