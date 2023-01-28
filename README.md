# Project Recipes App


- Project to develop a recipes app, using the most modern tools in React: Hooks and Context API.
- Two APIs consumed, one for meals, other for drinks.
- Project endeavours:
  - Use Redux to manage states
  - Use React-Redux library
  - Use React Context API to manage states
  - Use React Hook useState
  - Use React Hook useContext
  - Use React Hook useEffect
  - Create Custom Hooks
  - Use clipboard-copy library

<details>
  <summary><strong>Routes</strong></summary>
  
  * Login screen: `/`;
  * Food recipes main screen: `/foods`;
  * Drink recipes main screen: `/drinks`;
  * Food recipe details screen: `/foods/{recipe-id}`;
  * Drink recipe details screen: `/drinks/{recipe-id}`;
  * In progress food recipe screen: `/foods/{recipe-id}/in-progress`;
  * In progress drink recipe screen: `/drinks/{recipe-id}/in-progress`;
  * Explore screen: `/explore`;
  * Explore foods screen: `/explore/foods`;
  * Explore drinks screen: `/explore/drinks`;
  * Explore foods by ingredient screen: `/explore/foods/ingredients`;
  * Explore drinks by ingredient screen: `/explore/drinks/ingredients`;
  * Explore foods by nationality screen: `/explore/foods/nationalities`;
  * Profile screen: `/profile`;
  * Done recipes screen: `/done-recipes`;
  * Favorite recipes screen: `/favorite-recipes`.
</details>

## Requirements

<details>
  <summary><strong>Unit tests</strong></summary>
  
  1. Develop unit tests to cover at least 90% of your application ✔️
</details>

<details>
  <summary><strong>Login page</strong></summary>
  
  2. Create `Login` form ✔️
  3. Create code to allow `email` input ✔️
  4. Create code to allow `password` input ✔️
  5. Create validations to only allow valid email (regex) and password above 6 characters ✔️
  6. Save two tokens in `localStorage` after form submission, named `mealsToken` and `cocktailsToken` ✔️
  7. Save `email key` with user email in `localStorage` after form submission ✔️
  8. Redirect to food recipes `main` page after form validation and submission ✔️
</details>

<details>
  <summary><strong>Header</strong></summary>
  
  9. Create `Header` elements for recipe main pages (`profile button`, `page title` and `search button`) ✔️
  10. Implement profile page icon, title and search icon, if it exists in prototype ✔️
  11. Redirect to profile page once profile button is clicked ✔️
  12. Develop search button to show/hide search bar when clicked ✔️
</details>

<details>
  <summary><strong>Search Bar - Header</strong></summary>
  
  13. Create `Search Bar` elements, respecting prototype attributes (`ingredient radio button`, `name radio button`, `first letter radio button` and `search button`) ✔️
  14. Place search bar below main Header, and implement three radio buttons: `Ingredient`, `Name` and `First letter` ✔️
  15. Fetch from `foods` API if in foods page, and from `drinks` API in drinks page. ✔️
  16. If only one recipe is found when searching, redirect to recipe `details` page ✔️
  17. Show recipes in `cards` if multiple recipes are found ✔️
  18. Exhibit an `alert` if no recipes are found ✔️
</details>

<details>
  <summary><strong>Bottom menu (Footer)</strong></summary>
  
  19. Create `Footer` elements, respecting prototype attributes (`drinks button`, `explore button`, and `food button`) ✔️
  20. Fix Footer in page bottom, and add three icons, one for `Foods`, one for `Drinks`, one to `Explore` ✔️
  21. Display Footer in pages according to `prototype` ✔️
  22. Redirect user to drinks main page when drinks button is clicked ✔️
  23. Redirect user to explore page when explore button is clicked ✔️
  24. Redirect user to foods main page when foods button is clicked ✔️
</details>

<details>
  <summary><strong>Recipes main page</strong></summary>
  
  25. Create `main page` elements, respecting prototype attributes (`data-testids` of twelve food/drink cards) ✔️
  26. Load the first `twelve` cards of either foods or drinks ✔️
  27. Implement `category` buttons to be used as filters ✔️
  28. Implement `API` usage based on clicked category filter ✔️
  29. Implement category filter `toggle`, to return all recipes when clicked twice ✔️
  30. Implement filters to be used only once, based on clicked element ✔️
  31. Implement `All` categories button, to return all recipes ✔️
  32. Redirect user to clicked recipe details page ✔️
</details>

<details>
  <summary><strong>Recipes details page</strong></summary>
  
  33. Create `details page` elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  34. Fetch API and load recipe based on page `id` parameter ✔️
  35. Develop page to contain `recipe image`, `title`, `category` (including if it's alcoholic), list of `ingredients` followed by `quantities`, `instructions`, an embedded `youtube` video, and `recommendations` ✔️
  36. Implement `recommendations`. If in foods page, recommend drinks, and vice-versa ✔️
  37. Implement six recommendation `cards`, with a scroll showing two at a time ✔️
  38. Implement a `Start Recipe` button that must be fixed to bottom page ✔️
  39. Implement a solution to show `Start Recipe` button only if recipe is not marked as `done` ✔️
  40. Implement a solution to show `Continue Recipe` button if recipe is in progress ✔️
  41. Redirect user to recipe `in progress` page, if Start Recipe button is clicked ✔️
  42. Implement buttons to `share` or `favorite` recipes ✔️
  43. Implement `clipboard-copy` solution when share button is clicked, showing a message that the link was copied ✔️
  44. Implement `heart` icon as favorite button. Must be black if favorited, and white if not ✔️
  45. Implement a solution to toggle heart `color` when clicked ✔️
  46. Send favorite recipes to localStorage, in `favoriteRecipes` key ✔️
</details>

<details>
  <summary><strong>Recipes in progress page</strong></summary>
  
  47. Develop page to contain `recipe image`, `title`, `category` (including if it's alcoholic), list of `ingredients` followed by `quantities`, and `instructions` ✔️
  48. Develop `checkboxes` to each list ingredients ✔️
  49. Implement a solution to add a `line-through` once a checkbox is checked ✔️
  50. Save progress state, that must persist if page is reloaded or accessed afterwards ✔️
  51. Implement `share` and `favorite` buttons in progress page ✔️
  52. Implement a solution to enable `Finish Recipe` button only when all ingredients are checked ✔️
  53. Redirect user to `Done recipes` page when Finish Recipe button is clicked ✔️
</details>

<details>
  <summary><strong>Done recipes page</strong></summary>
  
  54. Create `done recipes` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  55. Implement a solution to display recipe `image`, `name`, `category`, `nationality`, `date` of recipe completion, the first two `API tags` returned, and a `share` button, if it's a food recipe card ✔️
  56. Implement a solution to display recipe `image`, `name`, whether it is `alcoholic` or not, `date` of recipe completion and a `share` button, if it's a drink recipe card ✔️
  57. Implement a solution to copy recipe details page when `share` button is clicked ✔️
  58. Implement buttons to filter done recipes by `foods` or `drinks`, and a third to remove filters ✔️
  59. Redirect to recipe `details` page when clicking in recipe image or name ✔️
</details>

<details>
  <summary><strong>Favorite recipes page</strong></summary>
  
  60. Create `favorite recipes` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  61. Implement a solution to display recipe `image`, `name`, `category`, `nationality`, `share` button and `unfavorite` button, if it's a food recipe card ✔️
  62. Implement a solution to display recipe `image`, `name`, whether it is `alcoholic` or not, `share` button and `unfavorite` button, if it's a drink recipe card ✔️
  63. Implement a solution to copy recipe details page when `share` button is clicked ✔️
  64. Implement a solution to remove recipe from `localStorage` and `screen` if unfavorite button is clicked ✔️
  65. Implement buttons to filter favorite recipes by `foods` or `drinks`, and a third to remove filters ✔️
  66. Redirect to recipe `details` page when clicking in recipe image or name ✔️
</details>

<details>
  <summary><strong>Explore page</strong></summary>
  
  67. Create `explore` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  68. Create `explore foods` and `explore drinks` buttons ✔️
  69. Redirect user to respective explore pages, when buttons are clicked ✔️
</details>

<details>
  <summary><strong>Explore drinks/foods pages</strong></summary>
  
  70. Create `explore foods/drinks` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  71. Create `explore by ingredient`, `explore by nationality` and `explore surprise` buttons ✔️
  72. Redirect user to explore by ingredients page, when button is clicked ✔️
  73. Redirect user to explore by nationality page, when button is clicked ✔️
  74. Redirect user to random recipe details page, when `explore surprise` button is clicked ✔️
</details>

<details>
  <summary><strong>Explore ingredients page</strong></summary>
  
  75. Create `explore ingredients` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  76. Display `cards` for the first twelve ingredients, each card containing ingredient `name`, and an `image` ✔️
  77. When ingredient card is clicked, redirect user to recipes `main` page, but only showing recipes which includes chosen ingredient ✔️
</details>

<details>
  <summary><strong>Explore nationality page</strong></summary>
  
  78. Create `explore nationality` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  79. Develop same specifications from recipes `main` page, but with a dropdown instead of category filters ✔️
  80. Implement dropdown, showing all areas returned by the `API`, including an `All` option, to return non-filtered recipes ✔️
  81. Route must only return page if in `foods`. `/explore/drinks/nationalities` must return `Not Found` error ✔️
</details>

<details>
  <summary><strong>Profile page</strong></summary>
  
  82. Create `profile` page elements, respecting prototype attributes (`data-testids` of elements in page) ✔️
  83. Implement a solution to display user email ✔️
  84. Implement three buttons: `Done Recipes`, `Favorite Recipes` and `Logout` ✔️
  85. Redirect user to favorite recipes page when respective button is clicked ✔️
  86. Redirect user to done recipes page when respective button is clicked ✔️
  87. Clear `localStorage` and redirect user to `login` page when `Logout` button is clicked ✔️
</details>
 
## Language and Tools

<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/> </a>
React
</br>
</br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/> </a>
JavaScript
</br>
</br>
<a href="https://
js.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="30" height="30"/> </a>
Jest

## Get started

<details>
  <summary><strong> Install it locally </strong></summary>
  </br>
  
  - Open terminal and create a directory in your preferred location:
  ```sh
  $ mkdir <Your directory name here>
  ```
  
  - Access directory then clone the repository:
  ```sh
  $ cd <Your directory name here>
  $ git clone git@github.com:ViniGB/Project-Recipes-app.git
  ```
  
  - Access the newly created directory:
  ```sh
  $ cd Project-Recipes-app
  ```
  
  - Install dependencies:
  ```sh
  $ npm install
  ```
  
  - Start application:
  ```sh
  $ npm start
  ```
</details>

## Project developed in group

[Raphael Soares de Freitas] (https://github.com/RSFreitas1991)
</br>
[Breno Laskavski Lopes](https://github.com/EletroCP)
</br>
[Thiago Silva Muniz](https://github.com/TsMuniz)
