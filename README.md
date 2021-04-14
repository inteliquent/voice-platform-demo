# Inteliquent Voice Platform Developer Resource
## Overview
This repository is intended to provide developers, who are looking to develop their applications on the Inteliquent Voice Platform, with useful code from basic building blocks to entire apps. Our goal at Inteliquent is to get your development team to a useful code as fast as possible. 


## Table of Content

>Note: Each code snippet should be associated with an Inteliquent Number/Domain to function as described below.

Code Snippets
- [Hello World](#helloworld)
- [Hello World w/ callback](#callback)
- [Forward call to SIP URI](#sipuri)
- [Forward call to another number](#number)
- [Forward call to registered SIP client](#regclientin)
- [Transfer caller between two agents](#calltransfer)
- [Dial from registered client](#regclientout)
- [Snippet](#snippet)
- [Record something](#record)
- [Record something in your GCP bucket](#gcp)
- [Voicemail](#voicemail)
- [Outbound A2P call](#a2p)
- [IVR](#ivr)
- [Live transcription](#livetranscription)
- [Key word spotter](#keyword)
- [Busy](#busy)


Demos:
- [Doorman app](README_doorman_demo.md)

WebRTC SDK:
-  <a href='#webrtcsdk' id='webrtcsdk' class='anchor' aria-hidden='true'></a> [.js to integrate your WebRTC client with Inteliquent](/sample/webrtcregistrationsdk.js)

#### Hello World <a href='#helloworld' id='helloworld' class='anchor' aria-hidden='true'></a> [see xml](/sample/helloworld.xml)

1. Call is answered
2. "Hello World" text is played after text-to-speech conversion.
3. Call is hung-up

#### Hello World with callback <a href='#callback' id='callback' class='anchor' aria-hidden='true'></a> [see xml](/sample/callback.xml)

1. Call is answered
2. "Hello World" text is played after text-to-speech conversion.
3. Call is hung-up
4. Call related information is sent to specified webhook



#### Forward call to SIP URI <a href='#sipuri' id='sipuri' class='anchor' aria-hidden='true'></a> [see xml](/sample/sipuri.xml)

1. Call is Accepted
2. Ringing tone is played to calling leg
3. New call leg is initiated to SIP URI
4. `INBOUND_CALLER_NUMBER` variable is used as Caller Id
5. When SIP URI answers the two call legs are joined
6. When either party hangs up both call legs are hung up


#### Forward call to another number <a href='#number' id='number' class='anchor' aria-hidden='true'></a> [see xml](/sample/number.xml)

1. Call is Accepted
2. Ringing tone is played to calling leg
3. New call leg is initiated to a dialable number
4. `INBOUND_CALLER_NUMBER` variable is used as Caller Id
5. When called party answers the two call legs are joined
6. When either party hangs up both call legs are hung up


#### Forward call to registered SIP client <a href='#regclientin' id='regclientin' class='anchor' aria-hidden='true'></a> [see xml](/sample/regclientin.xml)

1. Call is Accepted
2. Ringing tone is played to calling leg
3. New call leg is initiated to a registered client on Inteliquent's network
4. `INBOUND_CALLER_NUMBER` variable is used as Caller Id
5. When called party answers the two call legs are joined
6. When either party hangs up both call legs are hung up

>Note 1: Inteliquent's syntax allows for the full control of all call legs. This requires that each leg is named. The name is also used to hang up the specific leg should the other one be disconnected first.


>Note 2: Client specific domains include the `vp.sip.global` suffix. Customer specific registration domain will be established during customer onboarding.

#### Transfer caller between two agents <a href='#calltransfer' id='calltransfer' class='anchor' aria-hidden='true'></a> [see xml](/sample/calltransfer.xml)

1. Caller hears IVR prompt
2. Caller is instructed to press 1 or 2 
3. Based on their choise SIP client (agent) or WebRTC client(operator) are dialed and connected
4. Customer is provided with option of how to transfer call at any time.
5. If customer pressed `1` and wishes to be transfered to WebRTC operator he can press `2`
6. During the transfer the the other call leg is hung up.
7. If caller hangs up all call legs are terminated

#### Dial from registered SIP client <a href='#regclientout' id='regclientout' class='anchor' aria-hidden='true'></a> [see xml](/sample/regclientout.xml)

1. Call from client is Accepted
2. Ringing tone is played to calling leg
3. New call leg is initiated to PSTN
4. `INBOUND_CALLER_NUMBER` variable is used as Caller Id and `INBOUND_CALLEE_NUMBER` variable is used for the dialed number.
5. When called party answers the two call legs are joined
6. When either party hangs up both call legs are hung up

#### Snippet <a href='#snippet' id='snippet' class='anchor' aria-hidden='true'></a> [see xml](/sample/snippet.xml)

1. Call is answered
2. `helloworld` snippet is referenced
3. the snippet will convert "Hello World" text to speech and play it to customer. 
3. Call is hung-up

>Note: Snippets are re-usable code objects. As such they need to be defined at the beginning of the script before any call event (e.g. <answer>) Snippets are very useful in IVRs


#### Record something <a href='#record' id='record' class='anchor' aria-hidden='true'></a> [see xml](/sample/record.xml)

1. Call is answered
2. `record_and_playback` snippet is called
3. Text is converted to speech and played
4. External Audio file with the "Beep" sound is played
5. Recording with maximum duration of 5 seconds is started.
6. After the 5 second elapsed time the recorded audio is played to customer.
7. Call is hung up

>Note: In this example Inteliquent's internal storage product is used. The next example demonstrates the use of Bring Your Own storage functionality as an alternative(Google Cloud Platform is supported). We expect to add AWS to BYOS offering soon. 

#### Record something in your GCP bucket<a href='#gcp' id='gcp' class='anchor' aria-hidden='true'></a> [see xml](/sample/gcp.xml)


1. GCP authentication and account information is declared
2. Call is answered
3. `record_and_playback` snippet is called
4. Text is converted to speech and played
5. External Audio file with the "Beep" sound is played
6. Recording with maximum duration of 10 seconds is started.
7. Format of the file is `mp3` (wav is the used if omitted)
8. After the 10 second elapsed time the recorded audio is played to customer.
9. Call is hung up

>Note: For more detail refer to our [API documentation](https://inteliscript.docs.apiary.io/#reference/media-actions/record)


#### Voicemail <a href='#voicemail' id='voicemail' class='anchor' aria-hidden='true'></a> [see xml](/sample/voicemail.xml)


1. Snippet `voicemail` is declared
2. Call is accepted 
3. Leg to registered client is dialed.
4. Timer of 20 seconds for the registered client to answer is started
5. Upon expiration of the timer the client leg is hung up
6. `voicemail` snippet is called
7. Voicemail prompt is played to the caller
8. Audio file with "beep" sound is played
9. Recording with 1 minute max duration is started
10. When recording is complete link to the recording and call parameters is POSTed to a webhook.
11. At the end of the 1 minute timer or whenever the caller hangs up all legs are hungh up.
12. Bonus: `voicemail` snippet is called for variety of cause codes generated by the platform.

>Note: For more detail refer to our [Disconnect Codes](https://pbxbook.com/other/isdncode.html)


#### Outbound A2P call <a href='#a2p' id='a2p' class='anchor' aria-hidden='true'></a> [see xml](/sample/a2p.xml)


1. Call from +17200000001 to +17200000002 is dialed
2. When +17200000002 answers text converted to speech is played.
3. Call is hung-up

>Note: A2P calls are cURL calls to https://external-api.inteliquent.net/callback/submit?apiKey= , API Key is required before this API endpoint can be used. Above is an example of XML script included in the cURL.

#### IVR <a href='#ivr' id='ivr' class='anchor' aria-hidden='true'></a> [see xml](/sample/ivr.xml)

This code plays back the number pressed on your keypad.

1. Snippet `main_menu` is declared
2. Snippet `ready_dtmfs` is declared
3. Call is answered
4. Snippet `main_menu` is called
5. All previous DTMF tones are flushed out
6. Main Menu text is converted to speech and played
7. Snippet `ready_dtmfs` is declared
8. Users is asked to press keys 0-9 on their keypad
9. Depending on the digit pressed the user hears `Your pressed digit`.
10. User is returned to the main menu and can press any of the digits again.
11. Limit of 99 loops is put on the IVR.

#### Live transcription <a href='#livetranscription' id='livetranscription' class='anchor' aria-hidden='true'></a> [see xml](/sample/livetranscription.xml)

This code will answer a call, record what the caller says and return the transcription to caller in real time

1. GCP authentication and account information is declared
2. Call is answered
3. Disclaimer prompt is played to the caller
4. Recording with max duration of 10 seconds is started
5. Live transcription is started that provides results back every 1s to the specified webhook URL.
6. Upon expiration of 10 second timer call is hung up
7. Link to the recording is sent to specified webhook

>Note 1: This service uses our integration with Google and requires Google Account.

>Note 2: For more detail refer to our [API documentation](https://inteliscript.docs.apiary.io/#reference/media-actions/stream)

#### Key Word Spotter <a href='#keyword' id='keyword' class='anchor' aria-hidden='true'></a> [see xml](/sample/keyword.xml)

This code will return webhook whenever specified word is uttered.

1. GCP authentication and account information is declared
2. Call is answered
3. Prompt is played
4. Recording with max duration of 10 seconds is started
5. Key word spotting service is declared with spotting for words "Yes" and "No". 
6. Webhook information for what information should be sent to webhook whenever each word is detected is specified.
7. Upon expiration of 10 second timer call is hung up
8. Link to the recording is sent to specified webhook

>Note: For more detail refer to our [API documentation](https://inteliscript.docs.apiary.io/#reference/media-actions/stream)

#### Busy Tone <a href='#busy' id='busy' class='anchor' aria-hidden='true'></a> [see xml](/sample/busy.xml)

This code will play busy tone to the caller

1. Plays busy tone without answering the call
