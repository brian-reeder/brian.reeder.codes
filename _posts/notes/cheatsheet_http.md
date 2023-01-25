---
title: 'CheatSheet: http'
description: 'Status codes and general concepts'
meta: "Common uses and flags for netcat"
published: true
---
- ## CheatSheet: http
	---
	Hypertext Transfer Protocol is commonly used to transfer HTML and other media documents across web servers to internet browsers. It is a stateless protocol, so HTTP requires additional services to provide users a complete online experience.

	Detailed here are summarized descriptions of HTTP components.

- ## HTTP Methods
	---

	### Connect

	Starts a two-way connection with the host server. It can be used to open a tunnel.

	### Delete

	Deletes the specified resource.

	### Get

	Requests a representaton of the resource. Requests should be used to request data and should not contain data. 

	### HEAD

	Requests the headers that would be returned if you were making a GET request instead.

	### OPTIONS

	Requests a list of supported request methods.

	### Patch

	Request to modify the resource with the list of instructions.

	### POST

	Send data to the server, successive identical requests may have additional effects like processing the request multiple times.

	### PUT

	Creates a new resource or replaces the target resource with the new payload. Successive identical requests has the same effect, processing the request in a single way.

- ## 1XX - Informational
	---

	[100] Continue

	[101] Switching protocols

	[102] Processing

- ## 2XX Success
	---

	[200] OK

	[201] Created

	[202] Accepted

	[203] Non-authoritative information

	[204] No content

	[205] Reset content

	[206] Partial content

- ## 3XX Redirectional
	---

	[300] Multiple choices

	[301] Moved permanently

	[302] Found

	[305] Use proxy

	[307] Temporary redirect

	[308] Permanent redirect

- ## 4XX Client error
	---

	[400] Bad request

	[401] Unauthorized

	[403] Forbidden

	[404] Not found

	[405] Method not allowed

	[406] Not acceptable

	[407] Proxy authentication required

	[408] Request timeout

	[413] Payload too large

	[414] URI too long

	[415] Unsupported media type

	[418] I'm a teapot

	[423] Locked

	[429] Too many requests

	[451] Unavailable for legal reasons

- ## 5XX Host Errors
	---
	
	[500] Internal server error

	[501] Not implemented

	[502] Bad gateway

	[503] Service unavailable

	[504] Gateway timeout

	[505] HTTP version not supported

	[507] Insufficient storage

	[511] Network authentication required

	[599] Network connect timeout error
