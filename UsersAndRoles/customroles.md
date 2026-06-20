---
id: cdaf492d87d4
source: UsersAndRoles\CustomRoles.htm
title: "Custom Roles"
---



You can use the Custom Roles feature to grant access to specific [Objects](../objects/aboutobjects) to users who would not otherwise have access to those Objects.

Custom roles have no specific privileges in the Redwood Cloud Portal. They are simply named roles that can be applied to users.

## Applying Custom Roles to Objects

To make a custom role actually do something, you have to assign the custom role to an Object. For example, assume you have created a custom role named *Special_Operators*, and you would like all users with this custom role to be able to submit and view the [[UNRESOLVED: General.Workflow]](../jobsandworkflows/workflows/aboutworkflowdefinitions) named *Special_Workflow* on the [Queue](../queues/aboutqueues) named *Special_Queue*

!!! note
    For more information on Object privileges, see [Granting and Revoking Object Privileges](../security/privileges/grantingobjectprivileges).

To make this happen, you would:

1. Navigate to *Configure > Automate > [UNRESOLVED: General.Workflow]s*.
2. Right-click *Special_Workflow* and choose *Edit Security*.
3. Click under the *Subject* column in the first blank row and select the name of the custom role (in this case, *Special_Operators*).
4. In the same row, click under the *Granted Rank* column and select the desired option (in this case, *Submit and View*).
5. Click *Save & Close*.
6. Navigate to *Configure > Control > Queues* and repeat the process for the target Queue (in this case, *Special_Queue*).

!!! note
    Custom roles must be granted on an environment-by-environment basis. This means that granting access to an Object in the Test environment does not automatically grant access to that Object in other environments.

## Creating Custom Roles

To create a custom role:

1. Go to the Redwood Cloud Portal and navigate to *Security > Roles*.
2. Click *New Role* at the bottom.
3. Enter a name for the role in the *Name* field.
4. If desired, enter a description for the role in the *Description* field. If this value is not specified, the custom role's *Name* displays in the UI.
5. As a best practice, enter some documentation into the *Documentation* field. The notes in this field should describe what the custom role is for and how it should be applied.
6. Check the environments in which you want the custom rule to apply.
7. Click *Save*.

## Assigning Custom Roles to Users

For information on assigning custom roles to users, see [Managing Users and Roles](managingusersandroles).

## Considerations When Using Custom Roles

The following points should be considered if you are planning to use custom roles:

- Custom roles require privileges to be granted on processing Queues. Ensure that allowing one set of users to submit processes onto a Queue does not compromise integrity of other Objects associated with the same Queue (for example, if a Queue is served by more than one [UNRESOLVED: General.Job] Server).
- Users with the *Login* role can see standard system [UNRESOLVED: General.Job] Definitions, but cannot submit them unless they are granted access via a custom role. Without a custom role, they also cannot see or interact with any customer specific Objects.
- Users with the *No Access*role in an environment cannot be granted a custom role in that environment.

!!! note
    Custom roles are defined and maintained by customers. Control of access granted by custom roles is the responsibility of the customer, not the Redwood operations team.
