---
title: 'CheatSheet: networking'
description: 'Common TCP/UDP ports, reserved IP spaces, and more!'
meta: "A short summary of useful networking facts."
published: true
---
- ## CheatSheet: networking
	---
    It is important to understand networking fundamentals when troubleshooting computer incidents and when investigating security threats. Most of the informtion in this note is a documented standard or guideline of some kind, proprietary systems may operate in  unexpected ways. 

- ## Private IP Classes
	---
    
    Class A: 10.0.0.0 - 10.255.255.255
    
    Class B: 172.16.0.0 - 172.31.255.255
    
    Class C: 192.168.0.0 - 192.168.255.255
    
- ## Reserved IP Ranges
    ---
    127.0.0.0/8 - IPv4 Loopback Address

    255.255.255.255/32 - IPv4 Broadcast Address

    ::1 - IPv6 Loopback Address

- ## Port Ranges
	---
    
    Well-Known [0,1023]

    Registered [1024,49151]

    Dynamic/Private [49152, 65535]

- ## Common Ports & Services
    ---
    7 - Ping/Echo Protocol
    
    20 - FTP Protocol - Port for transferring FTP data
    
    21 - FTP Protocol - Port for FTP Control/Commands
    
    22 - SSH Protocol
    
    23 - Telnet Protocol
    
    25 - Simple Mail Transport Protocol (SMTP)
    
    53 - Domain Name System (DNS)
    
    67 - BootStrap Protocol (BOOTP) or DHCP
    
    68 - BootStrap Protocol (BOOTP) or DHCP
    
    80 - HTTP - Basic Web
    
    81 - Torpark - Onion routing port
    
    82 - Torpark Control Port
    
    88 - Kerberos authenticating agent
    
    156 - SQL Service
    
    161 - Simple Network Management Protocol (SNMP)
    
    179 - Border Gateway Protocol (BGP)
    
    264 - Border Gateway Multicast Protocol (BGMP)
    
    389 - Lightweight Directory Access Protocol (LDAP)
    
    443 - HTTPS - Web over TLS/SSL
    
    445/TCP - Microsoft-DS (Active Directory, Windows Shares)
    
    445/UDP - Microsoft-DS SMB File Sharing
    
    514/UDP - Syslog Protocol
    
    989 - FTP Protocol (data) over TLS/SSL
    
    990 - FTP Protocol (control) over TLS/SSL
