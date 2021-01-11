# Inteliquent Voice Platform Demo
## Overview
This repository contains instructions that an interested Inteliquent customer can follow to test various capabilities of the Inteliquent Voice Platform. This demo includes use of the Acrobits SIP client to demonstrate the full E2E capability of Inteliquent (Network-Platform-Client). Script that is used for the demo is included as well.

## Disclaimer
This app should be used for demonstrations only, any audio recording created during this demo as well as all the call related information will be sent to pubicly available URL and be visible for anyone with the URL information!

## Doorman app demo

The demo consistes of a call screening app that informs the receiving party of the caller's name and gives the callee the choice to either  answer, answer with recording or to send the call to voicemail. 

The doorman app demonstrates the following platform/client capabilities:
- Call Recording
- DTMF
- Call Forwarding
- Webhooks
- Call Insights
- Playing of Media to only a specified call leg
- SIP Registration
- Push Notifications (SIPIS)
- Acrobits Client



This demo uses the following XML script ([Inteqliquent Doorman demo](sample/doorman_demo.xml)) 


## Step-by-Step instrcutions

### Testing with a SIP Client

This demo requires a registered SIP client. We recommend that you use SIP client made by one of Inteliquent's brands -  Acrobits  called "Groundwire". You will find it in the [Apple App Store](https://apps.apple.com/us/app/acrobits-groundwire/id378503081) or [Google Play Store](https://play.google.com/store/apps/details?id=cz.acrobits.softphone.aliengroundwire&hl=en_US).

**NOTE:** Ask your sales representative for Groundwire  app `promo` codes

**NOTE:** Acrobits also offers SDK that customers can embed into their app

### Configuring the client for registration

Open the app and go to Keypad -> Click the settings icon in the upper right hand corner -> Accounts -> +  -> Generic SIP Account:

1. Name your account
2. Username: Cellphone number in E.164 format. This is the cellphone that has forwarding active in the examples above (e.g. +17201234567)
3. Password: {contact your sales representative}
4. Domain: inteliquent-demo.vp.sip.global
5. Save


### Configuring client for Push Notifications

1. In the **Goundwire** go to your `account`
2. select `Advanced Settings`
3. select `Push Options`
4. go to `Private SIPIS` section and configure following values:
    
   * **SIPIS host** - `sipis.sip.global`
   * **SIPIS registrar**  -`all.sipis.sip.global`
   * **SIPIS prefix length** - `1`
5. select `Done`
6. Your app is now configured to receive push notifications when backgrounded.

**NOTE:** for more on Push Notifications click here [SIPIS](https://doc.acrobits.net/sipis/index.html)

### Doorman app step-by-step instructions

Now that you have a registered client we can proceed to the actual domo:

1. Set up call forwarding for all calls to `708-982-7739` (on Verizon `*727089827739` on AT&T or T-Mobile `**21*17089827739#`)
2. Register Acrobits client ([Client Setup](##testing-with-a-sip-client)-described later in the document)
3. Call your mobile number (one that has forwarding active) - call is forwarded to `708-982-7739` which is an Inteliqent number with Voice Platform capabilities enabled.
4. The call arrives to Inteliquent Voice Platform (the script is attached to the number above)
5. Voice Plaform checks that this is a forwarded call.
6. “Doorman functionality” script is triggered and plays prompt saying “Hi! You have reached Inteliquent's Doorman demo. Please say your first and last names and the purpose of your call after the beep. Then I'll try to connect you.” 
7. Record the message (8 seconds) after recording stops caller hears “Thanks”
8. Caller hears ringing
9. Call is made to the registered Groundwire client and the client rings
10. When you answer the incoming call  the following message is played “ Call from” + recording is played + Press 1 to answer; press 2 to answer with recording enabled; press 3 to send the call to voicemail; press 4 to reject or simply hangup.

- If `1` is pressed the call is connected
- If `2` is pressed the call is connected and both parties hear "This call is being recorded" and the callee also hears "to stop the recording press 5 at any time" when either party hangs up or the callee presses #5 the audio file with the recording is posted to this site https://webhook.site/84f01ee0-1cc6-43f3-afa9-f10639c041f4
- If `3` is pressed the caller is sent to voicemail and link to file is posted to this site https://webhook.site/84f01ee0-1cc6-43f3-afa9-f10639c041f4
- If `4` is pressed call is ended

When the call finishes call related information including the following is posted to this site https://webhook.site/84f01ee0-1cc6-43f3-afa9-f10639c041f4

- Callee #
- Caller #
- PAI
- Diversion info (since the call is forwarded)
- call duration
- ISDN disconnect code
- MOS score
- Audio quality


## Further Documentation

Inteliquent Voice Platform REST API:

https://inteliscript.docs.apiary.io/#

Acrobits:

https://www.acrobits.net/
https://doc.acrobits.net/index.html

