# Role

| No. | Role Name | Role Level | Role Type | Overview |
| --- | --- | --- | --- | --- |
| **Platform** |  |  |  |  |
| 1 | Platform Super Admin | Platform | System-defined | Highest-privilege role for operating the platform. Responsible for platform-wide administration such as tenant onboarding, tenant activation/suspension, platform configuration, and management of platform-level operational controls. |
| **Tenant** |  |  |  |  |
| 2 | Tenant Admin | Tenant | System-defined | Highest-privilege role within a tenant. Responsible for tenant-level administration such as managing tenant users, assigning roles, maintaining tenant settings, and governing tenant resources. This role has authority only within its own tenant scope and cannot access other tenants. |
| 3 | Tenant Custom Role | Tenant | Tenant-defined | Custom business role created by a Tenant Admin for that tenant only. Used to group permissions according to the tenant’s business operation needs, such as property management, content management, review/approval, publishing, inquiry handling, or read-only access. Permissions are assigned at role level, and users receive access by being assigned the corresponding role. |