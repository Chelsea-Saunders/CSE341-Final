# CSE341-Final

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