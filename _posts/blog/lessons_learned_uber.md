---
title: "Lesson's Learned: Uber"
date: "2022-09-30"
published: true
---
# Lesson's Learned: Uber

On September 15th, 2022, it was publicly announced that Uber was hacked. Getting into the specifics, this appears to have been first leaked by [Corben Leo](https://twitter.com/hacker_/status/1570582547415068672) at 5:15 PM PT, with Uber first [acknowledging](https://www.uber.com/newsroom/security-update/) this activity at 6:25 PM PT. To me, this seems like Uber first found out about this security incident when the rest of us did, from the Corben Leo's twitter post. Their next update would come 16 hours later, where they indicate that there was no impact to operations and that law enformencement has been notified. I think it's important to recognize that they waited to inform law enforcement, I think this piece further supports my theory that this event was missed by Security Operations on their first pass.


## Why does it matter when they identified the intrusion?

It matters because it underscores their current state of security monitoring. Maybe they patch their systems in a timely manner and maybe they use MFA on all public facing endpoints, but they did not detect & respond to a MFA fatigue attack. They also did not detect & respond to an internal scan of servers. These two events are the smoking gun for this entire operation. Additional events may also have been detected: downloading unsually high amount of data, data exfiltration to uncommon addresses, successful sign-ins to rare hosts/addresses. I largely feel like identifying malicious behaviors on these hueristics is getting lucky. Getting lucky isn't a bad thing though.


## Why did they miss this?

On the surface level, I think these are difficult events to respond to. Since the target user is a contractor, the security operations team may not even have a direct communication channel to verify the activity they're seeing. Perhaps MFA is tied to their personal phone, so they can't just turn it off. A persistent attacker is going to keep sending push notifications until you accept. The victim won't uninstall MFA because they still have to work the next day, so they're incentivized to hit accept. Ideally the employee reaches out their IT or Security Teams for support, but a contractor may not even have access to work with them. 

Because of the power dynamics, the Security Team is predominately responsible stopping the attack by resetting passwords and MFA until the end user can be reached.

Once they get onto the internal network, they should be able to detect on an internal scan. This traffic can look different in a lot of ways, but if they do not have prior network knowledge you can expect to see a network scan search a wide range of IPs on common system ports, such as [tcp/445](https://www.speedguide.net/port.php?port=445) for SMB. In this case I would expect to see a high number of denied or dropped traffic on a bunch of IPs for this port. But even just seeing an abnormal of successful connections could be a valid indicator. When someone is performing legitimate work, they do not connect to 10 network shares in 5 minutes, with few exceptions.

Then again, detecting network traffic isn't always this easy. You may not have access to these logs if you only forward traffic from your firewalls. This will mean any local traffic that avoids the firewall will not be sent to a SIEM for inspection. Personally, I wouldn't want to log local traffic between desktops, as it will be incredibly noisy and filled with Microsoft Update Delivery. However, traffic to servers should be monitored with higher suspicion.


## What could have happened?

There are several screenshots floating around showing off access to their HackerONE Bounty Board, Slack, SentinelOne, and AWS IAM Panel. They also describe having access to their password manager from credentials found on that scanned server. Getting access to SentinelOne and AWS is as bad as it gets. You have control over their Endpoint Protection systems, and the access to bring their services to a halt. They can read/copy any admin passwords or use them to create back doors. They have access to production systems, and code repositories so they may be able to create new vulnerabilities or revert patched vulnerabilities from their HackerOne program. They also may be able to dump their password hashes and credit card information for their customers.

Of course, they said that no sensitive information was accessed. However, these screenshots have purposely vague files downloaded. 

One ransomware tactic I haven't seen yet, is where an attacker uses your endpoint protection software to lockdown all of your devices. These cloud-based EDR products normally continue to let you control/interact with locked down devices so data exfiltration is still possible.


## Closing thoughts

Ultimately, this seems like a SOC nightmare, and it is another recent case where it is easier to exploit human access than to exploit technical controls.

Here's what you should do to protect yourself from being impacted by this breach.

1. Don't reuse passwords on any website.
2. Change your password on Uber.
3. Don't save your Debit or Credit Card Information online.

And lastly, if you find yourself as the victim of an MFA attack, it is always better to at least turn your phone off until you can deal with it.

Cheers

Brian