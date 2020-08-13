# GroupProject_GoodFirYou_UI

Live site: http://good-fir-you-ui.herokuapp.com/home


Group Members: Charlie Beiser, Steve Swanton, Joseph 'Dayton' Wilson


react-tree-graph is being used for creating a React-based tree
see: reactjsexample.com/a-react-library-for-generating-a-tree-graph-from-data-using-d3/

## Iteration 3

### Joseph (Dayton) Wilson Contribution

- Added zoom and reset zoom functionality for tree branches

- Fixed the CSS to make the mobile view much better looking/more usable

### Charlie Beiser Contribution

- Continued spearheading deployment to heroku

- Helped sort out config inconsistencies and resolve webpack problems

- Assisted in trying to resolve Database connection problems.

- Added placeholder user functionality to BranchMod, which was unused.

### Steve Swanton Contribution

- Continued trying to resolve DB connection issues. Spent time with multiple TAs and over the course of several piazza posts with Prof Mullen was able to get the LandingPage to successfully acquire its data from our database. Solution was only found 6 hours before the deadline so a total reworking of the webapp was not tenable. All attempted revisions and updates to make the rest of the site dynamic have been pushed to the 'tooLittleTooLate' branch in both the API and UI repos.
---

## Iteration 2

### Joseph (Dayton) Wilson Contribution

- Built out profile features including experience, leveling

- CSS champion. Managed to sort out why CSS would not load and then via custom CSS updated the webapp to better capture the theme of Good Fir You.


### Charlie Beiser Contribution

- Heroku deployment czar

- Set up remote database for future use, connected and initialized it. 

- Bug fixes on UI. 


### Steve Swanton Contribution

Largely unsuccessful iteration on my part with failures to properly fetch & send data to the database.

- Reworked GraphQL and tested via Playground to confirm that individual 'trees' could be passed as a single object

- Attempted to update EnhancedTree, LandingPage and related files to allow for accessing & updating the database so we could remove our hardcoded examples, but even with TA help was unable to resolve my issues before the deadline.

- Looking forward the database connections will be priority number 1 so that the functionality implemented by teammates can be persistent and dynamic.

---

## Iteration 1

### Steve Swanton Contribution

Primary focus was on reworking API, see README: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_GoodFirYou_API

- For UI implementation reworked book project routing to remove pages irrelevant to our project and replace them with required pages for goodFirYou.

- Put together a few placeholder components for routing purposes that were then built by teammates. See SignUp page and nearly all UI functionality implementation.

- Performed the initial setup of react-tree-graph library for our project and set up example pages on the Landing Page and the user profile. The trees' CSS will need to be changed for legibility and style needs, but my efforts to update the tree style was unsuccessful this iteration.

- Reworked the webpack.config in an attempt to be able to alter the react-tree module styling, but again was not successful

Screenshots of reworked navigation and the example trees:

![Iteration 1.1 screenshot](images/home-miditeration-1.png)

![Iteration 1.2 screenshot](images/profile-miditeration-1.png)

### Charlie Beiser Contribution

-Created BranchMod class, which contains menu for adding, removing and editing individual nodes/branches.

-Improved Enhancedtree class to enable compatibility with BranchMod class.

-Connected add and remove branch functionality of EnhancedTree class into to BranchMod menu.

### Joseph (Dayton) Wilson Contribution

-Created EnhancedTree class as a wrapper for our base Tree that allowed us to make branch-specific actions such as addition and removal of nodes.

-Created Sign Up page.

-Created Profile page with functionality for switching among a selection of different trees (performed by selecting the tree name from a dropdown and clicking the switch button).

-Cleaned up the code by removing all now-unnecessary issue-related files from the project.
