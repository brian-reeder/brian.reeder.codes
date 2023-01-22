---
title: 'CheatSheet: nmap'
description: 'List scanned hosts and enumerate identified services.'
---
- ## CheatSheet: nmap
	---
    Network Mapper is an open source tool used to scan computer networks and services running on hosts. This program can be used by Systems Administrators, Network Defenders, or other authorized individuals to audit or scan a network. This can also be used by threat actors to map a network and identify vulnerable servers.

    Unauthorized nmap activity may indicate a threat actor attempting to gather intelligence before pivoting within a network or deploying initial exploits.

- ## Basic Usage
	---
	```
    // Scan IP for OS, Version, and Traceroute.
    nmap -A 10.10.10.10 -T4
    
    // Scan IP range for common services.
    nmap -F -sV 10.10.0.0-10.10.255.255
    
    // Scan IP Subnet for common ports.
    nmap -F 192.168.1.0/24

    // Scan known host that has Ping disabled.
    nmap -Pn -F -sV 10.2.0.200

    // Scan a subnet for Well-Known and Registered Ports
    nmap -p-49151 10.0.42.0/24
	```

- ## Common Flags
	---
    ### General

    [-A] Enable OS detection, version detection, script scanning, and traceroute

    [-T<0-5>] Set timing template (higher is faster).
    
    [-6] Enable IPv6 scanning.
    
    [-iL] Input from list file.
        
    ### Port Specification

    [-p] Only scan specified ports
    
    [-F] Fast mode - Scan fewer ports than default scan.

    [--top-ports <number>] Scan <number> most common ports.

    ### Host Enumeration
    
    [-sn] Ping Scan, disables port scan.
    
    [-sV] Probe open ports to determine service/version info.
    
    [-Pn] Treat all hosts as online.
    
    [--traceroute] Trace hop path to each host.
    
    [-O] Enable OS detection.

    ### Detection Evasion
    
    [-S] Spoof source address.
    
    [-g] Use given source port.

    [--spoof-mac] Spoof your MAC address.
