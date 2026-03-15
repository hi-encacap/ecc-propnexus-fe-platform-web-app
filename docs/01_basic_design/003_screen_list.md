# Screen List

# Platform

| No. | Function Group | Function Name | Overview | Technical Requirement |
| --- | --- | --- | --- | --- |
| **Authentication** |  |  |  |  |
|  | Authentication | Login | Allows platform and tenant admin users to authenticate to the shared Admin Console through the approved identity mechanism. |  |
|  | Authentication | SSO Login | Supports single sign-on login for admin users when external identity federation is configured. |  |
|  | Authentication | Logout | Allows the authenticated user to sign out from the Admin Console. |  |
| **Tenant Management** |  |  |  |  |
|  | Tenant Management | Tenant List | Allows Platform Admin to view the list of tenants managed by the platform. |  |
|  | Tenant Management | Tenant Detail | Allows Platform Admin to view the basic information and current status of a tenant. |  |
|  | Tenant Management | Create Tenant | Allows Platform Admin to create a new tenant in the platform. | On successful creation, the system shall provision the Tenant Admin account through the approved identity mechanism. |
|  | Tenant Management | Update Tenant | Allows Platform Admin to update the basic information and configuration of an existing tenant. | If the Tenant Admin email is changed, the system shall update or reprovision the Tenant Admin account according to the identity management policy. |
|  | Tenant Management | Activate Tenant | Allows Platform Admin to activate a tenant so that the tenant can use the platform. |  |
|  | Tenant Management | Suspend Tenant | Allows Platform Admin to suspend a tenant when platform access must be restricted. |  |
| **Audit Log Management** |  |  |  |  |
|  | Audit Log Management | Audit Log List | Allows Platform Admin to view platform audit logs. | Only platform-scope audit events are included in this function group. Tenant business operation logs are out of scope here. |
|  | Audit Log Management | Audit Log Detail | Allows Platform Admin to view the details of a specific audit log record. |  |
|  | Audit Log Management | Audit Log Search and Filter | Allows Platform Admin to search and filter audit logs by relevant conditions. |  |
|  | Audit Log Management | Audit Log Export | Allows Platform Admin to export audit log records for operational or compliance purposes. | Export scope shall follow the same access scope as the audit log search result. |
|  |  |  |  |  |

# Tenant

| No. | Function Group | Function Name | Overview | Technical Requirement |
| --- | --- | --- | --- | --- |
| **Role Management** |  |  |  |  |
|  | Role Management | Role List | Allows Tenant Admin to view the roles available within the tenant, together with their permission settings. |  |
|  | Role Management | Role Detail | Allows Tenant Admin to view the definition of a role, including its assigned permissions. |  |
|  | Role Management | Create Role | Allows Tenant Admin to create a new custom role within the tenant and define its permissions. |  |
|  | Role Management | Update Role | Allows Tenant Admin to update an existing tenant-defined role, including its permissions. | System-defined roles are read-only. |
|  | Role Management | Delete Role | Allows Tenant Admin to delete a tenant-defined role when it is no longer needed. | A role assigned to existing users cannot be deleted. |
| **User Management** |  |  |  | U |
|  | User Management | User List | Allows Tenant Admin to view the users within the tenant, together with their assigned roles and current status. |  |
|  | User Management | User Detail | Allows Tenant Admin to view the details of a user, including assigned roles and status. |  |
|  | User Management | Create User | Allows Tenant Admin to create a new user within the tenant and assign role(s). | On successful creation, the system shall provision the user account through the approved identity mechanism. |
|  | User Management | Update User | Allows Tenant Admin to update an existing user, including assigned role(s). |  |
|  | User Management | Activate User | Allows Tenant Admin to activate a user so that the user can access the tenant functions according to assigned roles. | Supported only for inactive users. |
|  | User Management | Deactivate User | Allows Tenant Admin to deactivate a user when access must be restricted. | Deactivation shall block user access without deleting user data. |
| **Site Management** |  |  |  |  |
|  | Site Management | Site List | Allows authorized tenant users to view the sites within the tenant. |  |
|  | Site Management | Site Detail | Allows authorized tenant users to view the details of a site. |  |
|  | Site Management | Create Site | Allows authorized tenant users to create a new site within the tenant. | M2M credential provisioning is handled by platform-side operation, not by tenant users. |
|  | Site Management | Update Site | Allows authorized tenant users to update an existing site. | Site configuration is managed as part of the site definition. |
|  | Site Management | Activate Site | Allows authorized tenant users to activate a site so that it can be used for public delivery. | Public access should be allowed only for active sites. |
|  | Site Management | Suspend Site | Allows authorized tenant users to suspend a site when public access must be restricted. | Suspension should block public access without deleting site-owned data. |
| **Property Management** |  |  |  |  |
|  | Property Management | Property List | Allows authorized tenant users to view and search property listings within the tenant. |  |
|  | Property Management | Property Detail | Allows authorized tenant users to view the details of a property listing. |  |
|  | Property Management | Create Property | Allows authorized tenant users to create a new property listing draft. | The property definition includes listing information such as title, description, property type, transaction type, location, price, area, contact information, media, and SEO metadata. If the description uses formatted content, its handling should align with the CMS content approach while remaining a separate property domain model. |
|  | Property Management | Update Property | Allows authorized tenant users to update an existing property listing. | If the description uses formatted content, its handling should align with the CMS content approach while remaining a separate property domain model. |
|  | Property Management | Delete Property | Allows authorized tenant users to delete a property listing. |  |
| **Approval Management** |  |  |  |  |
|  | Approval Management | Approval Request List | Allows authorized tenant users to view approval targets within the tenant, including property listings and CMS content. |  |
|  | Approval Management | Approval Request Detail | Allows authorized tenant users to view the details of an approval target, including its current approval status and related content. |  |
|  | Approval Management | Submit for Approval | Allows authorized tenant users to submit a property listing or CMS content item for approval. |  |
|  | Approval Management | Approve Content | Allows authorized tenant users to approve a submitted property listing or CMS content item. |  |
|  | Approval Management | Reject Content | Allows authorized tenant users to reject a submitted property listing or CMS content item. | Rejection reason should be recorded. |
|  | Approval Management | Publish Content | Allows authorized tenant users to publish approved property listings or CMS content for public use. | Only approved content can be published. |
|  | Approval Management | Unpublish Content | Allows authorized tenant users to withdraw published property listings or CMS content from public use. |  |
|  | Approval Management | Archive Content | Allows authorized tenant users to archive property listings or CMS content that are no longer active. |  |
| **Content Management** |  |  |  |  |
|  | Content Management | Content List | Allows authorized tenant users to view and search content within the tenant. |  |
|  | Content Management | Content Detail | Allows authorized tenant users to view the details of a content item. |  |
|  | Content Management | Create Content | Allows authorized tenant users to create a new content draft. | The content definition may include fields such as title, summary, body content, category, tags, media, and SEO metadata. |
|  | Content Management | Update Content | Allows authorized tenant users to update an existing content item. |  |
|  | Content Management | Delete Content | Allows authorized tenant users to delete a content item. |  |
| **Site Configuration Management** |  |  |  |  |
|  | Site Configuration Management | Site Configuration Detail | Allows authorized tenant users to view the current site configuration of the tenant. | The initial configuration is provisioned by the platform. |
|  | Site Configuration Management | Update Site Configuration | Allows authorized tenant users to update the editable site configuration used by the tenant frontend. | Tenant users cannot delete the configuration. System-defined configuration structure is managed by the platform. |