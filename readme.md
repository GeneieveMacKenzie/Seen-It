# `SocialSite.com`
<img class="img-responsive" src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">

According to the mission statement of `SocialSite.com` they are a website that collaboratively administrates empowered markets via plug-and-play networks. Dynamically integrate B2C users after installed base benefits and dramatically visualizing customer directed convergence without revolutionary ROI.

In other words they are the same as about all other SocialMedia platforms. Here are some you may be more familiar with: 

<hr>

#### Twitter
<img class="img-responsive" src="https://cdn.cms-twdigitalassets.com/content/blog-twitter/official/en_us/topics/company/2018/introducing-us-election-labels-for-midterm-candidates/_jcr_content/par/rail-blog-container/column/image_2043522929.img.jpg/1527026763871.jpg">

<hr>

#### MySpace
<img class="img-responsive" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/07/TomMySpace-796x432.png">

<hr>

#### Instagram
<img class="img-responsive" src="https://media.sproutsocial.com/uploads/2018/05/Screenshot_20180529-125816.png">

<hr>

## Goals

In this challenge students will demonstrate a working knowledge of building full-stack applications in a team environment with tight time deadlines. Groups will utilize a Vue.js frontend implementing the Vuex design and Vue-Router to manage the dom. On the server they will use Express with Node.js, express-sessions for authentication, bcrypt for password hashing, the mongoose ORM and MongoDB as their database. From a data standpoint, groups will create one to many relationships to manage posts and comments, and many to many relationships for managing user connections via a followers and following model.

## The Setup

Before you dive right into the code of this project you will want to take some time to make a few decisions as a team. Some of the things to discuss are: 
-   do you have a theme to your project and why your site stands out (it's for cats, you can only post gifs, etc.)
-   the general design of the site (page layouts, views, components, etc), 
-   create your trello backlog.

From there you will want to assign one member of the team to create the project (click "use this template") on their github and add each of the other team members as collaborators. This will allow anyone on the team to push and pull from this one github (each member will **NOT** need to fork their own copy, simply clone from the main users repository). From there, determine who will start with the backend and who will start with the front end.

> TIP: you should only be coding on 2 computers, one for the client and one for the server. One partner typing and the other partner telling them what to write/researching. Switch who is typing and switch partners periodically throughout the day. All members should see all parts of the project at some point.

### Step 1

As a team work together to decide what your data models will look like. This will help ensure when you split up into your partners both teams have a good idea of the data they will be working with. Determine what properties are named, and stick with that naming convention. Additionally determine some of the business rules and user stories for your app ("users must be logged in to do _____.")

From there the server team can start getting to work on creating models, services, and controllers. Meanwhile the frontend team can start to take the mockups that you did earlier and create the skeleton of the client architecture.

### Step 2 

Every user has their own profile page, and per the business rules of `SocialSpace.com` all users posts are found on their profile, and anyone can see any other users profile and posts without having to specifically follow them. At the moment SocialSpace is not requiring a feed of all the posts from people you are following, though they may look at this in the future (stretch-goal). 

To find users you will want to use a form input on the front-end to make a request to the database for matching users. This has been partially set up in the store and in the database in the `User` sections. 

> Deciding some of the early business rules will be very important your team. The more rules you define, even if they are 'no' rules, (any user can see another users posts without logging in) will help in building the application.

### Step 3

Connecting users introduces managing many to many relationships. A user can 'follow' another user, and visa-versa a user can be followed by another user. On their profile page users can see the people following them and the people they follow. A user can follow any other user they choose, without having to get a confirmation on permissions (twitter style). From a data standpoint, we are going to create another schema that will track the two user's ids (the `follower` and the `following`), you will also need routes to get all of the people a user is following, and all of their followers.

> NOTE: Take care when returning user data, you should only ever return the 'public' data, such as the users name and if you add profile pic. (SEE: Mongoose 'select' or 'populate')

Since we are making multiple different routes (for followers and for following) your client team will need to remember to not only get the user by the user id, but also get the followers and the following users when loading a profile page.

## Requirements

### Visualization

- The Front End is styled (this is a broad concept, but put a bit of effort into it as this makes a great portfolio piece)
- A user should not have to re-login everytime they refresh the page
- From the **Home** Page Users will see their profile and can create/delete their own posts, posts may contain text, or an image, this is your decision on what can and can't be done
- A user can add and remove (their own) comments to any post if they are logged in
- Users can "like" a post and the number of likes is reflected on the post
- Each post will show the users name and possibly profile image (if you include images, you might consider something like https://robohash.org/ as a default profile image)
- From any profile page the users `followers` and `following` numbers are shown, with some sort of way to see all the accounts that are in those lists 

### Functionality

- Only the creator of an object can delete it
- A user Must have the ability to log in and out.
- The Backend needs to be able to create and store the posts created by users
- Each post can have comments
- Posts have a like count


### Stretch Goals:
- Top 8: Users can set the top 8 profiles that they are following
- Users can only like one time
- Different kinds of 'likes' (:heart:, :rage:, :bomb:, :joy:, :banana:)
