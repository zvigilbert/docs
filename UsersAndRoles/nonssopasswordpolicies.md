---
title: "Non-SSO Password Policies"
id: "6cb999da6fba"
source: "UsersAndRolesonSSOPasswordPolicies.htm"
---

# Non-SSO Password Policies

Redwood strongly recommends using SSO for password management. If you use SSO, your Identity Provider can control all security and monitoring. However, if you do NOT use SSO, the policies for passwords are as follows.

- A new password cannot be the same as any of the previous ten passwords.
- Maximum password age: 90 days.
- Minimum password age: No restriction.
- Lockout threshold: Accounts are locked after five failed login attempts. When a user's account is locked, an unlock link is sent to the User's email.
- Lockout duration: Indefinite. The account remains locked until an administrator unlocks the account in the Redwood Cloud Portal.
- Reversible encryption: No.
- MFA: Browser must be verified via authentication number.

When an Administrator creates a User in the Redwood Cloud Portal, an email is sent to that user, asking them to set their password. Non-SSO user passwords must follow these complexity rules:

- Passwords must contain at least one lower-case character.
- Passwords must contain at least one upper-case character
- Passwords must contain at least one number.
- Passwords must contain at least one symbol.
- Passwords must contain at least 12 characters.
- Common passwords are not allowed.