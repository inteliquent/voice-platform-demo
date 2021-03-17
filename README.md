# Inteliquent Voice Platform Developer Resource
## Overview
This repository is intended to provide developers, who are looking to develop their applications on the Inteliquent Voice Platform, with useful code from basic building blocks to entire apps. Our goal at Inteliquent  is to get your development team to a useful code as fast as possible. 


## Table of Content

>Note: Each code snippet should be associated with an Inteliquent Number/Domain to function as described below.

Code Snippets
- [Hello World](#helloworld)
- [Hello World w/ callback](#callback)
- [Forward call to SIP URI](#sipuri)
- [Forward call to another number](#number)
- [Forward call to registered SIP client](#regclientin)
- [Dial from registered client](#regclientout)
- [Snippet](#snippet)
- [Record something](#record)
- [Record something in your GCP storage](#gcp)
- [Voicemail](#voicemail)
- [Outbound A2P call](#a2p)
- [IVR](#ivr)
- [Audio Forking](#forking)
- [Live transcription](#livetranscription)
- [Keywordspotter](#keyword)


Demos:
- [Doorman app](README_doorman_demo.md)



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

#### Dial from registered SIP client <a href='#regclientout' id='regclientout' class='anchor' aria-hidden='true'></a> [see xml](/sample/regclientout.xml)

1. Call from client is Accepted
2. Ringing tone is played to calling leg
3. New call leg is initiated to PSTN
4. `INBOUND_CALLER_NUMBER` variable is used as Caller Id and `INBOUND_CALLEE_NUMBER` variable is used for the dialed number.
5. When called party answers the two call legs are joined
6. When either party hangs up both call legs are hung up

#### Snippet <a href='#snippet' id='snippet' class='anchor' aria-hidden='true'></a> [see xml](/sample/snippet.xml)

1. Call is answered
2. `hellowrold` snipped is referenced
3. the snippet will convert "Hello World" text to speech and play it to customer. 
3. Call is hung-up

>Note 1: Snippets are re-usable code objects. As such they need to be defined at the beginning of the script before any call event (e.g. <answer>) Snippets are very useful in IVRs