# Smart Campus Service & Maintenance Management System

## Gautam Buddha University

A highly detailed, modular, role-based blueprint and frontend implementation for smart campus service operations.

---

## 1. Executive Summary

This project designs a complete **Service & Maintenance Management Platform** where every operational capability is split into separate modules, but all modules stay interconnected through workflow events, shared data contracts, and governance rules.

The current repository includes:
- A detailed frontend prototype (React + TypeScript + Vite)
- Expanded architecture and module relationships
- Deep role-based dashboard definitions
- Detailed product documentation for backend, data, and integration implementation

Primary objective:
- Build a transparent, SLA-driven, auditable, and scalable campus service ecosystem.

---

## 2. Business Problem

Campus service operations in large institutions generally fail due to:
- Manual complaint registration (phone/counter/paper)
- Fragmented channels and no single source of truth
- Delays due to poor assignment governance
- Weak escalation and SLA visibility
- No closure quality check and repeat complaint control
- Low integration between technician execution and inventory
- Weak reporting and little predictive insight
- Missing continuous quality feedback from all stakeholders

---

## 3. Vision & Product Principles

### Vision
Create a **single unified digital platform** where customer/staff, technician, vendor, and administrators collaborate on one transparent complaint lifecycle.

### Product principles
1. Modular and scalable by design
2. Separate ownership with shared governance
3. SLA-first operational model
4. Data integrity and auditability by default
5. "Give ratings and feedback" as mandatory quality loop
6. Actionable analytics for leadership decisions

---

## 4. Repository Technology Stack

- Frontend: React 19 + TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS (v4)
- Linting: ESLint

### Commands
- `npm run dev` — development server
- `npm run build` — type-check + production build
- `npm run lint` — linting
- `npm run preview` — production preview

---

## 5. Architecture Layers

### 5.1 Presentation Layer
- Role-based web/PWA dashboards
- Complaint forms, queue views, reports, admin controls

### 5.2 Application Layer
- Core workflow engines (intake, assignment, execution, escalation, feedback, analytics)

### 5.3 Integration Layer
- Notifications (SMS/email/WhatsApp)
- Future-ready IoT and GIS integration

### 5.4 Data Layer
- Relational model for users, complaints, assignments, inventory, feedback, logs

### 5.5 Security Layer
- Authentication, authorization, RBAC, policy enforcement, audit trails

---

## 6. Core Modules (Deep Detailed)

All modules are independent in development and deployment planning, but interconnected through events and data contracts.

---

### M1. User & Access Module

**Owner:** Super Admin  
**Purpose:** Role lifecycle, secure access, policy enforcement

**Sub-modules**
- Identity & SSO
- RBAC Policy Engine
- Session Manager
- Access Audit Tracker

**Core capabilities**
- User onboarding and profile lifecycle
- Role-permission matrix governance
- Account lock/reset and secure login policy
- Session and access activity tracing

**Key workflows**
- Registration → role mapping → approval → activation
- Login → policy validation → OTP/MFA (future) → session issue
- Role updates → permission recalculation → access propagation

**Automation rules**
- Inactive account suspension
- High-risk login force logout
- Credential hygiene reminders

**Validation rules**
- Unique identity checks
- Strong password policy
- Permission conflict detection

**KPIs**
- Unauthorized access blocked
- Failed login ratio
- Session integrity score

**Outputs**
- Secure sessions, role-bound access tokens, access logs

---

### M2. Complaint Intake Module

**Owner:** Customer / Staff  
**Purpose:** Structured complaint registration with rich metadata

**Sub-modules**
- Smart Complaint Form Engine
- Category & Location Mapper
- Ticket ID Generator
- Complaint Timeline Builder

**Core capabilities**
- Complaint creation with category/location/priority
- Media proof upload (image/video)
- Time-stamped unique complaint ticket creation
- Complaint status timeline initialization

**Key workflows**
- Create complaint → validate → generate ticket → queue
- Duplicate/frequent issue hinting
- Closure reopen request handling

**Automation rules**
- Auto acknowledgment messages
- Priority recommendation by severity
- Duplicate complaint detection hints

**Validation rules**
- Mandatory category and location
- Media format/size checks
- Actionable description quality rules

**KPIs**
- Complaint creation completion rate
- Reopen ratio
- Duplicate complaint frequency

**Outputs**
- Queue-ready complaint payload, initial status logs

---

### M3. Assignment Module

**Owner:** Vendor + Department Admin  
**Purpose:** Right technician assignment with SLA intelligence

**Sub-modules**
- Skill Matching Engine
- SLA Rule Router
- Workload Balancer
- Reassignment Controller

**Core capabilities**
- Skill and availability based assignment
- Assisted/manual assignment controls
- Reassignment and escalation
- Vendor/technician workload optimization

**Key workflows**
- Ticket fetch → match score → assignment
- No-eligible technician → escalation path
- Delay risk detection → fast-track reassignment

**Automation rules**
- Auto assignment for high confidence cases
- Pre-breach SLA warning generation
- Delay-based reassignment recommendation

**Validation rules**
- Technician active status enforcement
- Skill-tag and category compatibility
- SLA class linkage checks

**KPIs**
- Assignment turnaround time
- Reassignment rate
- SLA risk exposure count

**Outputs**
- Work orders, assignment logs, escalation triggers

---

### M4. Technician Execution Module

**Owner:** Technician  
**Purpose:** End-to-end field execution and closure readiness

**Sub-modules**
- Work Order Inbox
- Progress Tracker
- Proof Capture Unit
- Closure Confirmation

**Core capabilities**
- Job acceptance and progress updates
- Before/after evidence upload
- Material usage declaration
- Resolution summary and closure request

**Key workflows**
- Accept work order → execute → update milestones
- Material consume → usage mapping → verification
- Completion submit → closure review → feedback trigger

**Automation rules**
- Stage update reminders
- Auto timestamps per stage
- Closure checklist prompts

**Validation rules**
- Mandatory proof for critical categories
- Material and complaint linkage checks
- Completion note quality checks

**KPIs**
- First-time fix rate
- Average resolution duration
- Closure proof compliance

**Outputs**
- Resolution notes, proof artifacts, closure request

---

### M5. Notification & Escalation Module

**Owner:** System + Department Admin  
**Purpose:** Timely communication and SLA governance

**Sub-modules**
- Alert Composer
- Escalation Engine
- Reminder Scheduler
- Delivery Tracker

**Core capabilities**
- Multi-channel notifications
- SLA breach detection and escalation ladder
- Role-targeted subscriptions
- Follow-up reminders

**Key workflows**
- Event → template selection → role route → delivery
- SLA threshold breach → escalation execution
- Delivery failure → retry → fallback channel

**Automation rules**
- Pre-breach warnings
- Reminder campaigns
- Priority-wise escalation matrix

**Validation rules**
- Template integrity checks
- Notification preference compliance
- Escalation permission checks

**KPIs**
- Delivery success rate
- Escalation response lag
- Reminder effectiveness score

**Outputs**
- Alert events, escalation logs, communication audit trail

---

### M6. Inventory Module

**Owner:** Store + Vendor  
**Purpose:** Material control linked with complaint execution

**Sub-modules**
- Stock Ledger
- Issue/Return Desk
- Usage Reconciliation
- Procurement Alert Board

**Core capabilities**
- Stock maintenance and threshold tracking
- Technician issue/return management
- Material usage reconciliation per complaint
- Low-stock alerts and procurement support

**Key workflows**
- Issue request → approval → dispatch
- Usage submit → complaint map → ledger update
- Threshold breach → procurement trigger

**Automation rules**
- Auto low-stock alerts
- Usage anomaly detection
- Pending return reminders

**Validation rules**
- Stock availability pre-check
- Mandatory complaint mapping
- Negative stock prevention

**KPIs**
- Stock-out incidents
- Issue-vs-usage mismatch ratio
- Replenishment cycle time

**Outputs**
- Updated inventory ledger, usage statements, purchase alerts

---

### M7. Feedback & Rating Module

**Owner:** All Roles  
**Purpose:** Continuous service quality improvement

**Sub-modules**
- Rating Form Engine
- Comment Analyzer
- Quality Index Calculator
- Corrective Action Queue

**Core capabilities**
- Give ratings and feedback after each resolved ticket
- Role-wise weighted feedback scoring
- Comment moderation and follow-up actions
- Satisfaction and root-cause trends

**Key workflows**
- Closure → feedback prompt → score capture → publish
- Low score detection → corrective task creation
- Trend decline detection → governance escalation

**Automation rules**
- Feedback reminder nudges
- Auto escalation for low ratings
- Comment auto-tagging by issue theme

**Validation rules**
- One response per role per ticket
- Content moderation policy checks
- Weighted scoring consistency checks

**KPIs**
- Satisfaction score
- Participation ratio
- Low-score recovery time

**Outputs**
- Quality scores, feedback analytics, corrective action triggers

---

### M8. Analytics Module

**Owner:** Campus Admin + Super Admin  
**Purpose:** Decision intelligence and performance governance

**Sub-modules**
- KPI Dashboard Builder
- Trend Intelligence
- Scorecard Generator
- Forecast Engine

**Core capabilities**
- SLA/TAT/First-Time-Fix dashboards
- Category/location/vendor/technician analytics
- Feedback quality scoring and trends
- Recurring issue prediction indicators

**Key workflows**
- Event ingest → aggregate → dashboard refresh
- Weekly/monthly close → scorecard generation
- Anomaly identify → recommendation publish

**Automation rules**
- Scheduled report generation
- KPI threshold breach alerts
- Dashboard cache refresh policy

**Validation rules**
- Metric definition consistency
- Data completeness checks
- Cross-module reconciliation checks

**KPIs**
- SLA compliance
- Mean time to resolution
- Recurring fault reduction

**Outputs**
- KPI dashboards, scorecards, forecast reports

---

### M9. Audit & Compliance Module

**Owner:** Super Admin + Compliance Team  
**Purpose:** Immutable traceability and compliance readiness

**Sub-modules**
- Audit Collector
- Compliance Rule Monitor
- Evidence Export
- Retention Controller

**Core capabilities**
- Action-level immutable logging
- Permission and policy change tracking
- Compliance violation detection
- Export-ready audit evidence

**Key workflows**
- Event capture → index → retention tag
- Scheduled compliance check → violation alert
- Audit request → evidence pack generation

**Automation rules**
- Tamper detection notifications
- Policy breach escalation
- Compliance health snapshots

**Validation rules**
- Log chain integrity checks
- Retention policy enforcement checks
- Secure evidence access controls

**KPIs**
- Audit coverage percentage
- Violation response time
- Evidence export turnaround time

**Outputs**
- Audit reports, risk flags, compliance evidence bundles

---

## 7. Inter-Module Relationship Map

1. User & Access authorizes every role action.
2. Complaint Intake creates standardized ticket payload.
3. Assignment routes ticket to best-fit technician/vendor.
4. Technician Execution performs job and closure request.
5. Notification & Escalation monitors every status transition.
6. Inventory maps material use to execution events.
7. Feedback & Rating captures service quality response.
8. Analytics consolidates operations + quality + governance metrics.
9. Audit & Compliance stores immutable evidence across all stages.

---

## 8. Additional Feature Packs (Extra Additions)

### 8.1 Smart Priority Engine
- Auto severity scoring by category, location criticality, and impact
- VIP/service critical zone prioritization

### 8.2 Duplicate Complaint Intelligence
- Suggest existing open ticket with same symptom/location
- Reduce repeated registrations and noise

### 8.3 Corrective Action Management
- Auto create action item for repeated low ratings
- Owner assignment and closure tracking for quality actions

### 8.4 Service Contract Governance
- Vendor SLA adherence tracking by contract
- Performance penalties and quality incentive indicators

### 8.5 Knowledge Base Suggestions
- Technician solution history for recurring problems
- Faster fixes through reusable closure patterns

---

## 9. Role Dashboards

### 9.1 Customer / Staff
- Raise complaint, track status timeline, upload proof, view history
- Give ratings and feedback at closure

### 9.2 Technician
- Accept/execute jobs, update progress, upload proof, record material use
- Give ratings and feedback for workflow and assignment quality

### 9.3 Vendor
- Monitor team workload, SLA risk, assignment status, score trends
- Give ratings and feedback on process and support quality

### 9.4 Department Admin
- Priority control, approval/escalation, area performance reports
- Give ratings and feedback for operational governance

### 9.5 Campus Admin
- Global governance, strategic analytics, resource optimization
- Give ratings and feedback for quality and policy decisions

### 9.6 Super Admin
- Policy/RBAC controls, security governance, compliance monitoring
- Give ratings and feedback on system-level process quality

---

## 10. Functional Requirements

- Secure auth + RBAC
- End-to-end complaint lifecycle
- Smart assignment and reassignment
- SLA monitoring and escalation
- Technician execution and evidence capture
- Inventory issue/usage/reconciliation
- Feedback/rating loop across all roles
- Analytics and scorecards
- Immutable audit trails and compliance evidence

---

## 11. Non-Functional Requirements

- High scalability with modular decomposition
- Responsive and accessible UI
- Policy-compliant secure data handling
- Availability and reliability for service-critical operations
- Full traceability and observability

---

## 12. Data Model Blueprint

### 12.1 Core entities
- users, roles, permissions, departments
- complaints, complaint_categories, complaint_status_logs
- technicians, vendors, assignments
- inventory_items, inventory_transactions, material_usage
- feedback_responses, rating_dimensions, corrective_actions
- notifications, delivery_logs, escalation_rules
- audit_logs, compliance_violations

### 12.2 Key relations
- User 1:N Complaints
- Complaint 1:N StatusLogs
- Complaint 1:N Assignments
- Technician 1:N Assignments
- Complaint 1:N MaterialUsage
- Complaint 1:N FeedbackResponses
- All critical actions → AuditLogs

---

## 13. API Domain Blueprint

- `/auth/*` → login, token, role policy
- `/users/*` → user profile and role management
- `/complaints/*` → create, update, list, close, reopen
- `/assignments/*` → assign, reassign, queue governance
- `/technician/*` → progress, proof, completion
- `/inventory/*` → stock, issue, return, usage
- `/feedback/*` → submit, moderate, quality score
- `/notifications/*` → alerts, reminders, escalation events
- `/analytics/*` → KPIs, scorecards, trends
- `/audit/*` → logs, evidence export, compliance checks

---

## 14. Development Roadmap

### Phase 1: Product Foundation & UX Blueprint
- Information architecture, role journeys, component system
- Module contracts and shared payload standards

### Phase 2: Core Workflow Implementation
- Intake + assignment + execution + closure backend
- Authentication and role policy enforcement

### Phase 3: Governance & Automation
- SLA engines, notification scheduler, escalation matrix
- Inventory and usage reconciliation

### Phase 4: Quality Intelligence
- Rating/feedback analytics, corrective action queue
- Vendor/technician quality scorecards

### Phase 5: Audit, Security & Scale
- Compliance dashboards, audit evidence exports
- Multi-campus readiness and performance optimization

---

## 15. Expected Outcomes

- Significant reduction in resolution delays
- Higher service quality through rating-feedback loops
- Better resource governance and utilization
- Strong compliance readiness and traceability
- Leadership-ready analytics for strategic planning

---

## 16. Local Setup

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build production bundle: `npm run build`
4. Preview build: `npm run preview`

---

## 17. Repository Pointers

- Main UI file: `src/App.tsx`
- App bootstrap: `src/main.tsx`
- Styling: `src/App.css`, `src/index.css`

---

## 18. Conclusion

This repository now contains a **deeply detailed, module-first, enterprise-ready blueprint** for Smart Campus Service & Maintenance Management. Modules are separate, rich in features, and strongly interconnected, making the project suitable for phased implementation with strong governance, quality, and scale.
