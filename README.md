# Voice Platform Demo

## Overview 

Learn to use Voice Platform to script the flow of inbound and outbound phone calls. Build a phone menu, forward, record, connect, conference.

This enables you to build phone systems that intelligently route inbound calls, provide automated self-service for common support calls, record the interaction between parties, seamlessly transfer a call between agents, and more. 

## Getting Started

Once we have created your demo phone number and API key you are ready to get started.

Please [contact us](mailto:sales@inteliquent.com) if you don't have this and wish to demo the platform. The [Inteliquent Customer Portal](https://portal.inteliquent.com) is the web based tool that our you usemanage your account with us. 

#### Example Credientials

- Username: `customer@domain.com` 
- API Keys: `39893lke009l`
- Password: `Welcome123!`

#### Creating a Script

```xml
<script>
    <head/>
    <body>
        <!-- The action and event elements -->
    </body>
</script>
```

#### Submit your script
- demo.vp.sip.global
- New demo number
- Limited API key

*Question: Does this environment need to be isolated?*

#### Credientials

- Username: demo@customer.info 
- Password: [Find here]
- API Key: [Generated]

Using the Voice Platform Demo portal. A new account and credentials were provisioned for this demo customer.

### Examples

### API Documentation

- voice-platform-demo.inteliquent.net
- [Inteliscript API Guide](https://inteliscript.docs.apiary.io/)

```bash
curl --location --request POST 'https://vpdemo.inteliquent.net/script' \
--header 'Content-Type: application/xml' \
--header 'Accept: application/xml' \
--data-raw '<script>
    <head/>
    <body>
        <!-- The action and event elements -->
    </body>
</script>'
```

Groundwire Free Code
Configuration via QR
QR Code

## API Documentation

- [Inteliscript API Guide](https://inteliscript.docs.apiary.io/)
- [Creating a menu](https://inteliscript.docs.apiary.io/)
- [Recording a call](https://inteliscript.docs.apiary.io/)

## Testing

### with Groundwire / Cloudsoftphone

Download a client
How to configure with your phone number
Scan this QR code

## Features

External Registration

### Ryan Notes
* production demo env
* no specific domain
* using our trunks
* links to documentation (use a new inteliquent domain)
* sales person centric
* test our product with this link (gw code?)
* similar to Robokiller app
* auto-registration (pass through)
* concerte usable examples
* ask customer how could we ramp you faster
* examples - highlight functionality
