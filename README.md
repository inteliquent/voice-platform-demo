# Inteliquent Voice Platform Developer Resource
## Overview
This repository is intended to provide developers, who are looking to develop their applications on the Inteliquent Voice Platform, with useful code from basic building blocks to entire apps. Our goal at Inteliquent is to get your development team to a useful code as fast as possible. 


## Table of Content

>Note: Each code snippet should be associated with an Inteliquent Number/Domain to function as described below.

### Code Snippets
- [Hello World](#helloworld)
- [Hello World w/ callback](#callback)
- [Initial script w/ callback](#initial)
- [Forward call to SIP URI](#sipuri)
- [Forward call to another number](#number)
- [Forward call to four numbers and loadshare among them](#loadshare)
- [Forward call to registered SIP client](#regclientin)
- [Number masking with external proxy](#masking)
- [Transfer caller between two agents](#calltransfer)
- [Dial from registered client](#regclientout)
- [Snippet](#snippet)
- [Record something](#record)
- [Record something in your GCP bucket](#gcp)
- [Voicemail](#voicemail)
- [Outbound A2P call](#a2p)
- [IVR](#ivr)
- [IVR with Hubspot integration](#IVR_with_Hubspot_integration)
- [Authenticated conference](#conferenceroom)
- [Live transcription](#livetranscription)
- [Key word spotter](#keyword)
- [Bi-lingual IVR](#bilingualivr)
- [AMD with beep detection](#amdbeepdetection)
- [Appointment reminder](#appointment_reminder)
- [Busy](#busy)


### Demos:
- [Doorman app](README_doorman_demo.md)

### WebRTC:
- [SIP.js ](https://cdn.jsdelivr.net/npm/sip.js@0.12.0/dist/sip.min.js) SDK that can be used to integrate with Inteliquent 
- Inteliquent specific Integration snippet  <a href='#webrtcsdk' id='webrtcsdk' class='anchor' aria-hidden='true'></a> [.js ](/sample/webrtcregistrationsdk.js)

#### Hello World <a href='#helloworld' id='helloworld' class='anchor' aria-hidden='true'></a> [see xml](/sample/helloworld.xml)

1. Call is answered
2. "Hello World" text is played after text-to-speech conversion.
3. Call is hung-up

#### Hello World with callback <a href='#callback' id='callback' class='anchor' aria-hidden='true'></a> [see xml](/sample/callback.xml)

1. Call is answered
2. "Hello World" text is played after text-to-speech conversion.
3. Call is hung-up
4. Call related information is sent to specified webhook

#### Initial script with callback and "Hello World" response <a href='#initial' id='initial' class='anchor' aria-hidden='true'></a> [see xml](/sample/initial.xml)

>Note: This script is equivalent to default webhook configuration seen with e.g. Twilio but with some customization to showcase flexibility. The script expects to receive additional XML from the called webservice with instructions of what to do next.

1. Call is accepted (183 Session Progress returned)
2. Caller hears ringing (200OK + ACK)
3. Webhook is sent to a defined URL with useful parameters (<a href='#webhook' id='webhook' class='anchor' aria-hidden='true'></a> [JSON](/sample/webhook.json)) as well as information in the HTTP header that can be used for authentication for example. The webservice can  use this information to determine what the next steps should be. In our case the webservice responds with simple <a href='#responsefromwebservice' id='responsefromwebservice' class='anchor' aria-hidden='true'></a> [Hello World](/sample/helloworldfromwebservice.xml) XML script. 
4. The script will wait up to 4 seconds for this response after which timeout is declared (error equivalent)
5. In case of a timeout or error (e.g. 404) message will be played to a caller informing them of an issue. The script will wait 1 second before this message is played to account for possible network latency don't and to ensure the cut message is not cut off. 
6. Originating call leg is hung up

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


#### Forward call to four numbers and loadshare among them <a href='#loadshare' id='loadshare' class='anchor' aria-hidden='true'></a> [see xml](/sample/loadshare.xml)

1. Call is Accepted
2. Ringing tone is played to calling leg
3. Array of four numbers is loaded as a variable (this array could be requested dynamically with a webhook as well)
4. One number is selected at random and stored as variable called `RANDOM`
5. New call leg is initiated to the randomly selected number
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

#### Number masking with external proxy <a href='#masking' id='masking' class='anchor' aria-hidden='true'></a> [see xml](/sample/masking.xml)

1. Call is Accepted
2. Webhook is sent to masking proxy containing useful network parameters.  JSON response is expected with values of the proxy_from and proxy_to numbers
3. JSON parameters are saved in order to be used later in the call
4. New call leg is dialed with the new to/from values
5. When called party answers, the two call legs are joined
6. When either party hangs up both call legs are hung up

#### Transfer caller between two agents <a href='#calltransfer' id='calltransfer' class='anchor' aria-hidden='true'></a> [see xml](/sample/calltransfer.xml)

1. Caller hears IVR prompt
2. Caller is instructed to press `1` or `2` 
3. Based on their choice SIP client (agent) or WebRTC client(operator) are dialed and connected
4. Customer is provided with option of how to transfer call at any time.
5. If customer pressed `1` and wishes to be transferred to WebRTC operator she can press `2`
6. During the transfer the other call leg is hung up.
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
11. At the end of the 1 minute timer or whenever the caller hangs up all legs are hung up.
12. Bonus: `voicemail` snippet is called for variety of cause codes generated by the platform.

>Note: For more detail refer to our [Disconnect Codes](https://pbxbook.com/other/isdncode.html)


#### Outbound A2P call <a href='#a2p' id='a2p' class='anchor' aria-hidden='true'></a> [see xml](/sample/a2p.xml)


1. Call from +17200000001 to +17200000002 is dialed
2. When +17200000002 answers text converted to speech is played.
3. Call is hung-up

>Note: A2P calls are cURL calls to https://external-api.inteliquent.net/v2/callback/submit?apiKey= , API Key is required before this API endpoint can be used. Above is an example of XML script included in the cURL.

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

#### IVR with Hubspot Integration <a href='#IVR_with_Hubspot_integration' id='IVR_with_Hubspot_integration' class='anchor' aria-hidden='true'></a> [see xml](/sample/IVR_with_Hubspot_integration.xml)

This code is for complex Pizza shop IVR that personalizes the customer experience thanks to integration with Hubspot

1. Customer information is looked up based on their calling number
2. If record is found, customer is greeted by their name
3. They are offered the option to order what they had last time
4. They are also offer to use credit card on file 
5. If they want to make a new choice they are given that option and can choose both size and type of pizza.
6. Their order is repeated
7. They can still use their card on file or can enter new credit card
8. Credit card information is sent to payement gateway
9. Order information is sent to the restaurants POS system
10. Caller hears a thank you messege and call hangs up.


#### Authenticated Conference <a href='#conferenceroom' id='conferenceroom' class='anchor' aria-hidden='true'></a> [see xml](/sample/conferenceroom.xml)

This code provides example of authenticated audio conference

1. This script should be attached to a conference access number
2. Caller will hear prompt to enter conference id
3. When customer enters 6 digits a webhook will be sent to customer portal.
4. If the conference exists, the webservice will return PIN code to the platform
5. Caller will hear prompt to enter PIN code.
6. If the PIN code is entered correctly the caller is placed into the conference. 
7. Once the caller is joined into the conference she hears message `You are now part of the conference room number 654321`
8. Customer will have 3 opportunities to enter conf. room and PIN correctly. After 3 failed attempts the call ends

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

This code will return webhook when specified word is uttered.

1. Call is answered
2. Prompt is played
3. Key word spotting service is declared with spotting for words "Yes" and "No". 
4. Webhook information for what information should be sent to webhook once either word is detected is specified.
5. When key word is detected Webhook with that word is sent
6. Detected word is repeated
7. Call is Hung up

>Note: For more detail refer to our [API documentation](https://inteliscript.docs.apiary.io/#reference/media-actions/gather)

#### Bi-lingual  IVR <a href='#bilingualivr' id='bilingualivr' class='anchor' aria-hidden='true'></a> [see xml](/sample/gather_bilingual_ivr.xml)

This is an example of a multi level bi-lingual IVR


1. Call is answered
2. User is given option to select language (English/Spanish). Their selection is saved and includes default voice/language and engine and will be used throughout the call flow allowing for just one flow even when two languages are considered
3. User is given option to select Pizza. If input times out a no input option is triggered and call is hung up if users makes invalid selection they are given option to do make their choice again.
4. User hears summary of the order and can either confirm or start over
5. User is asked to enter Credit card number followed by a pound. Note: This is only for illustrative purposes, in real life expiration date and CVC code would have to be entered as well. 
6. Once entered both the selected pizza and the credit card number are sent to an external web service and order is completed.


>Note: This is an example of a serverless IVR, if decision making logic is required `<query>`can be declared in every `<onGather>` event to return the desired behavior.

#### AMD with beep detection <a href='#amdbeepdetection' id='amdbeepdetection' class='anchor' aria-hidden='true'></a> [see xml](/sample/amd_beep_detection.xml)

This is an example of an API call that will deliver voice message to a customer or customer's voicemail and is very useful for all voice notification use cases

1. Call to a number is dialed
2. When call is answered, 1 second pause is added to allow the human to start listening to the message
3. It is assumed that human will answer and an audio file intended for the human is played
4. Answering machine detection (AMD) is started at the same time.
5. If voicemail greeting is detected by AMD the message for the human is stopped
6. When the voicemail beep is detected, a message intended for voicemail is played
7. When the message is completed call is hung up.

>Note: A2P calls are cURL calls to https://external-api.inteliquent.net/v2/callback/submit?apiKey= , API Key is required before this API endpoint can be used. Above is an example of XML script included in the cURL.

#### Appointment Reminder <a href='#appointment_reminder' id='appointment_reminder' class='anchor' aria-hidden='true'></a> [see xml](/sample/appointment_reminder.xml)

This is an example of an API call that call customer and reminder of their medical appointemnt and will allow them to change it if required

1. Call to patient's number is dialed
2. API call to your scheduling system is initiated based on patient's number to retrieve any existing appointment times to remind them off
3. Patient hears welcome message with appointment reminder
4. Answering machine detection (AMD) is started at the same time and follows the logic in the previous example
5. Customer is given a choice to keep the existing time or reschedule
6. If they reschedule the newly entered dates are sent back to the scheduling system and if desired time is confirmed patient is notified
7. If date and time are not available Patient is notified and they are asked to dial the office to reschedule their appintment

>Note: A2P calls are cURL calls to https://external-api.inteliquent.net/v2/callback/submit?apiKey= , API Key is required before this API endpoint can be used. Above is an example of XML script included in the cURL.

#### Busy Tone <a href='#busy' id='busy' class='anchor' aria-hidden='true'></a> [see xml](/sample/busy.xml)

This code will play busy tone to the caller

1. Plays busy tone without answering the call
