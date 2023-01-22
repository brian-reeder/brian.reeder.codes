---
title: "Investigating Suspicious IP Addresses"
date: "2023-01-17"
published: true
---
# Investigating Suspicious IP Addresses

## Introduction

Investigating suspicious IP addresses can be a crucial step in detecting and preventing malicious activity. By tracking IPs that have been previously linked to such activity, security teams can improve their detection capabilities and respond to potential threats more effectively. However, this task is complicated by the increasing number of cloud hosting, virtual private server, and anonymization networks available today. To effectively investigate suspicious IPs, one must consider various data points such as the IP's Internet Service Provider, hosting provider, open services, previous malicious behavior, approximate geolocation, and registration date.

## Scenario

In this blog post, we will examine a scenario in which a threat intelligence account on Mastodon shares information on RDP scanners. An RDP scanner is a program or service that scans IP addresses for publicly exposed remote desktop ports, which are often not secured with multi-factor authentication. By identifying these configurations, a threat actor can potentially gain unauthorized access to a system.

After reviewing the information shared by the threat intelligence account, we can see that the top 3 IPs have made a high number of attempts to access a local user named "hello". This unusual username, coupled with the high volume of attempts, suggests that the IPs may be associated with RDP scanning.

## Verifying IP reputation

To expand our investigation and build a more complete threat profile, we can turn to open source resources such as Greynoise.io. This internet intelligence feed provides information on internet research groups, scanning operations, and threat actors.

By searching for the IP in question on Greynoise, we can see that the IP has been confidently attributed as malicious. We also gain valuable information such as the IP's activity range, the RDNS name, and the specific ports that were scanned. This information can help us confirm the activity range observed in our SIEM, verify whether or not scanning was seen on the same port, and pivot to search for potential exploits.

In this scenario, we can see that the IP only scanned port TCP/3128, which can be used as a proxy server. Knowing this, we can further verify whether or not this IP was attempting to use a proxy to conceal its identity and actions.

Overall, investigating suspicious IPs is a complex task that requires a thorough examination of various data points and resources. By utilizing open source intelligence feeds and analyzing the specific activity and ports associated with the IP, security teams can more effectively detect and respond to potential threats.

## WHOIS behind this?

Another key part of investigating activity from IP addresses is to look at the [whois](https://search.censys.io/hosts/69.169.81.48/whois) record for the ip address.

The ASN CIDR is another piece of information to pivot on during this investigation. We now know that the network 69.169.80.0/23 contains our suspicious IP and we can pivot off of that to check if they are using another IP in the same block to act on objectives.

Looking at their listed contact information also indicates that this IP has some relationship to the organization AtlanticMetro and 365DataCenters.

Doing some additional investigation on Crunchbase indicates that this Atlantic Metro is a hosting company founded in 2007 that was acquired by 365 Data Centers. This implies that it is unlikely that the entire IP block is malicious, but it is still important to verify.

## Next steps

During this investigation we have identified the following details:
1. The suspicious IP is targeting RDP through an HTTP Proxy on TCP/3128
2. The suspicious IP is allocated to a cloud hosting provider.
3. Additional activity may be observed from other IPs in the same network block.

A reasonable short term mitigation is to block the single scanning IP. After that if you determine that you do have an attacker in your network, the activity needs to be escalated to incident responders who will need to assess the situation based on how long the attacker has been in the network. Common initial response strategies include: quarantining the affected hosts or networks, resetting affected account passwords, and quarantining touched file shares.

Of course, it is always important to keep a level head and verify your activity before you jump straight to conclusions. 

Cheers

Brian