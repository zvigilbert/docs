---
id: 18d5147ea25e
source: SSOConfiguration\SSOUserLicenses.htm
title: "SSO User Licenses"
---

# SSO User Licenses

If SSO is configured, adding users to groups is managed in your user management system. SSO users are added as soon as they access the Dashboard and count towards the license. User privileges are synchronized each time they log in,and are not automatically removed when you remove them from your SSO system or remove their access. Inactive users will see their account, but not their privileges nor their access, removed after 90 days. They will be able to log in again, provided they still have access according to the SSO system.

Every user that has access to the dashboard and that successfully logs in is counted towards the license. If you wish to remove a user from the license count, you must remove that user's access in the dashboard. If you do not remove the user from the SSO access groups, the user can log in again and will count towards the license once more.

Users that have been removed due to inactivity no longer count towards the license. However, if a user is still in the access groups, they will be able to log in and will once again count towards the license.

No synchronization is performed with the SSO system to find users for which access has been removed from access groups and still have an account. A user that has been removed from the access groups will not be able to log in, but will continue to count towards the license until the user attempts to log in, the user's access is removed by an SSO administrator, or the user is purged due to inactivi**No Access**: A user with this role in a given environment will not see a *Connect* button for that environment in the dashboard.
