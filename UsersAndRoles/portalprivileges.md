---
id: 464494cd951f
source: UsersAndRoles\PortalPrivileges.htm
title: "Portal Privileges"
---

# Portal Privileges

Portal Privileges control what your users can view and manage within the cloud portal itself. These roles do not affect roles within our products.

The available portal privileges are as follows.

- *Environment Access*: Provides access to your Redwood product environments. Security managers can control access per environment. Users with this privilege are counted against your User allowance because they can access environments. If a User does not have this privilege, they are NOT counted against your User allowance.
- *Environment Administrator*: Provides access to the *Environments* section of the Redwood Cloud Portal, allowing administrators to manage environment details such as support access, alert notifications, scheduled upgrades, scheduled restarts, and maintenance time windows.
- *Security Administrator*: Provides access to the *Security* section of the Redwood Cloud Portal. Allows administrators to add, edit, and delete Users, custom Roles, and contacts. Security Administrators can also view audit activity and manage existing SSO access groups.
- *SSO Administrator*: Provides access to the *Security* section of the Redwood Cloud Portal, where administrators can set up and manage multiple SSO configurations, including activating and deactivating SSO login.
- *Finance Administrator*: Provides access to the *Finance* section of the Redwood Cloud Portal, allowing administrators to view per-environment consumption and high-level contract details.

The table below shows the capabilities associated with each type of portal privilege.

| Area | Page | Actions | Environment Access | Environment Administrator | Security Administrator | SSO Administrator | Finance Administrator |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dashboard | Dashboard | Environment access | ✓ |  |  |  | ✓ |
|  |  | View messages | ✓ | ✓ | ✓ | ✓ | ✓ |
|  |  | Delete messages |  | ✓ |  |  |  |
|  |  | View notifications* | ✓ | ✓ | ✓ | ✓ | ✓ |
| Environments | Environment Settings | Change support access |  | ✓ |  |  |  |
|  |  | Change extended access |  | ✓ |  |  |  |
|  |  | Add/remove alert notification contacts |  | ✓ |  |  |  |
|  |  | Restart environment** |  | ✓ |  |  |  |
|  |  | View notifications (including logged errors) |  | ✓ |  |  |  |
|  |  | View environment activity |  | ✓ |  |  |  |
|  |  | View environment access |  | ✓ |  |  |  |
|  | Upgrade Windows | Change maintenance windows for non-prod & prod |  | ✓ |  |  |  |
|  | Upgrades | View scheduled upgrades |  | ✓ |  |  |  |
|  |  | Create or update a scheduled upgrade |  | ✓ |  |  |  |
|  | Restarts | View scheduled restarts |  | ✓ |  |  |  |
|  |  | Create or update a scheduled restart |  | ✓ |  |  |  |
| Security | Users | View all users |  |  | ✓ |  |  |
|  |  | View licenses used/total |  |  | ✓ |  |  |
|  |  | Add a user |  |  | ✓ |  |  |
|  |  | Change a user details |  |  | ✓ |  |  |
|  |  | Delete a user |  |  | ✓ |  |  |
|  |  | View user overview |  |  | ✓ |  |  |
|  | Roles | View custom roles |  |  | ✓ |  |  |
|  |  | Add custom roles |  |  | ✓ |  |  |
|  |  | Delete custom roles |  |  | ✓ |  |  |
|  | SSO | Add SSO configuration |  |  |  | ✓ |  |
|  |  | Change SSO configuration |  |  |  | ✓ |  |
|  |  | Disable SSO configuration |  |  |  | ✓ |  |
|  |  | Add SSO access groups |  |  | ✓ | ✓ |  |
|  |  | Change SSO access groups |  |  | ✓ | ✓ |  |
|  |  | Delete SSO access groups |  |  | ✓ | ✓ |  |
|  | Activity | View all account activity on portal |  |  | ✓ |  |  |
|  | Contacts | View contacts |  |  | ✓ |  |  |
|  |  | Add contacts |  |  | ✓ |  |  |
|  |  | Change contacts |  |  | ✓ |  |  |
|  |  | Delete contacts |  |  | ✓ |  |  |
|  |  | Add contact to environment alert notifications |  | ✓ |  |  |  |
| Consumption | Consumption | View total counts of processes run |  |  |  |  | ✓ |
|  | Contracts | View Contracts |  |  |  |  | ✓ |
| Help | Help | Help Links | ✓ | ✓ | ✓ | ✓ | ✓ |
