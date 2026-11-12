# CSE341-Final

## OVERVIEW
Our Lost and Found app helps people in a specific community or location share items they’ve found and search for items they have lost. All visitors can browse posted items, but users must log in to create posts, edit their own posts, or leave comments. When an item is returned to its owner, the original poster can update the status to “returned”, and the post can later be removed by an admin. Admin users have full control over the platform, including the ability to view, edit, or delete any post as well as remove inappropriate posts or comments. 

## KEY FEATURES
- Public dashboard where anyone can view lost and found posts
- Secure login required to create, edit, and comment on posts
- User controls for managing their own posts
- Status updates to mark an item as returned
- Admin moderation tools for editing or deleting any post
- Flexible content management for maintaining an organized and trusted community board

## BENEFITS
-Makes it easier for people to recover lost items
- Encourages community participation and communication
- Keeps the dashboard organized and up to date
- Provides moderation tools to help maintain safety and accuracy

## PROBLEM
- A person loses an item, looks but just can't find it
- A person wants to communicate with the finder about whether the item really is theirs

## SOLUTION
- Another person finds an item but wants to return it
- Two-way communication for users in a chat
- Any inappropriate communication can be removed

## DATABASE
1. Items
Stores information about lost and found items posted by users.
Fields:
_id: Unique identifier for the item.
title: Name or title of the item.
description: Detailed description of the item.
type: Indicates whether the item is lost or found.
category: Category of the item (e.g., Electronics, Clothing, Keys).
imageUrl: URL of the item's image (maximum one image per post).
location: Location where the item was lost or found.
eventDate: Date and time when the item was lost or found.
status: Current status of the post (open or closed).
userId: Reference to the user who created the post.
createdAt: Date and time when the post was created.
updatedAt: Date and time of the last update.

2. Users
Stores user profile information obtained through Google OAuth and manages application permissions.
Fields:
_id: Unique identifier for the user.
name: User's full name.
email: User's email address.
googleId: Unique identifier provided by Google OAuth.
role: User permission level (user or admin).
createdAt: Date and time when the user account was created.

3. Claims
Tracks requests from users who want to recover found items. Stores private ownership evidence and claim review decisions.
Fields:
_id: Unique identifier for the claim.
itemId: Reference to the found item being claimed.
userId: Reference to the user requesting the item.
proof: Private description or evidence showing ownership.
status: Current claim status (pending, approved, rejected, or withdrawn).
reviewNote: Optional private explanation of the review decision.
createdAt: Date and time when the claim was submitted.
reviewedAt: Date and time when the claim was approved or rejected (optional).

4. Messages
Stores private messages between the person who posted a found item and the user requesting its return. Messages are associated with a specific claim.
Fields:
_id: Unique identifier for the message.
claimId: Reference to the associated claim.
senderId: Reference to the user who sent the message.
content: Message text (1–2,000 characters).
readAt: Date and time when the message was read (optional).
createdAt: Date and time when the message was sent.

** Database Relationships **
Each user can create multiple lost or found item posts.
Each found item can have multiple ownership claims.
Each claim belongs to one found item and one user (the claimant).
Each claim can have multiple private messages.
Each message belongs to one claim and one user (the sender).
Users can exchange private messages related to a claim.
Only the item publisher or an authorized administrator can approve or reject claims.
Users will only be allowed to modify or delete their own posts, while administrators will have permission to manage all posts.

## SCHEDULE
Week 9: Create collections, connect MongoDB and refactor layout, API documentation, and complete proposal 
Week 10: GET endpoints, complete CRUD endpoints, data validation, error handling, and initial tests
Week 11: Implement Google OAuth, user sessions, and role-based authorization
Week 12: Complete authentication/authorization tests, image uploads, search, comments, reports, and Swagger
Week13: Final testing, Render deployment, and YouTube demo
Week14: Turn in


## API ENDPOINTS
The Lost and Found application will provide RESTful API endpoints for managing users, lost and found items, ownership claims, and private messages.
1. Items
GET /items – Retrieve all items with optional filters.
GET /items/:id – Retrieve an item by ID.
POST /items – Create a lost or found item post.
PUT /items/:id – Update an item.
DELETE /items/:id – Delete an item.
PATCH /items/:id/status – Update the status of an item.

2. Users
GET /users – Retrieve all users (admin only).
GET /users/:id – Retrieve a user's information.
GET /users/me – Retrieve the authenticated user's profile.
PUT /users/me – Update the authenticated user's profile.
DELETE /users/me – Delete the authenticated user's account.
PATCH /users/:id/role – Update a user's role (admin only).

3. Claims
GET /claims – Retrieve claims accessible to the authenticated user.
GET /claims/:id – Retrieve claim details.
GET /items/:id/claims – Retrieve claims associated with an item.
POST /items/:id/claims – Submit an ownership claim.
PUT /claims/:id – Update a pending ownership claim.
DELETE /claims/:id – Withdraw an ownership claim.
PATCH /claims/:id/status – Approve or reject an ownership claim.

4. Messages
GET /claims/:id/messages – Retrieve messages associated with a claim.
GET /messages/:id – Retrieve a specific message.
POST /claims/:id/messages – Send a private message.
PUT /messages/:id – Update a message.
DELETE /messages/:id – Delete a message.
PATCH /messages/:id/read – Mark a message as read.

5. Authentication
GET /auth/google – Initiate Google OAuth authentication.
GET /auth/google/callback – Handle the Google OAuth callback.
GET /auth/me – Retrieve the authenticated session.
POST /auth/logout – Log out the authenticated user.
All endpoints will include input validation, error handling, and appropriate authorization controls. The API will be documented using Swagger and deployed to Render.






## things you will need to add to your personal .env:
GITHUB_CLIENT_ID=<your_client_id>
GITHUB_CLIENT_SECRET=<your_client_secret>
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback

SESSION_SECRET=<a_long_random_string>

PORT=3000
MONGODB_URI=<your_uri>

GOOGLE_CLIENT_ID=<Your_google_client_id(found_on_google_cloud_console)>
GOOGLE_CLIENT_SECRET=<a_long_random_string>
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback

GITHUB_CLIENT_ID=<input_your_client_id>
GITHUB_CLIENT_SECRET=<a_long_random_string>
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback

## CREATING A GITHUB BRANCH, PULLING AND PUSHING REMINDER
git checkout -b feature /name-of-new-branch. // create the branch
git add -A
git commit -m "your_comment_here"
git push -u origin feature /name-of-new-branch   //furture pushes from new branch to 
                                                    remote repository
git push
git checkout main          // pushes you back to main repository branch
git pull origin main       // pull request
git merge feature/name-of-new-branch     // merge branches
git push origin main       // push to main github page

git branch -d feature /name-of-new-branch // if you decide to delete branch later