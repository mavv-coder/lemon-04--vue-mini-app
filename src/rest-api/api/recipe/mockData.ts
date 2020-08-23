import { Recipe } from "../../model";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Veggie Crustless Quiche",
    imgUrl: "../../../../assets/img/veggie-crustless-quiche.jpg",
    time: 20,
    description:
      "Quiche is a French dish typically comprised of a pastry shell (not unlike a pie crust) filled with a savory egg custard and any number of ingredients like vegetables, meat and cheese. After baking, the custard's texture should be delicate, airy and slightly creamy. The egg flavor should not be too forward so it can act as the perfect vessel for the other delicious ingredients you add.",
    ingredients: [
      "butter",
      "mushrooms",
      "shallot",
      "salt",
      "eggs",
      "milk",
      "oil",
      "parmesan",
    ],
    steps: `
    1. Preheat oven to 375°. In a medium skillet over medium heat, melt butter. Add mushrooms and let cook, undisturbed, for 2 minutes. Stir and continue to cook until mushrooms are tender and golden, 5 to 6 minutes. Add shallot and cook until fragrant, 1 minute. Add spinach and cook until wilted, 1 minute more. Season with salt and pepper and remove from heat.
    2. In a large bowl, whisk together eggs, milk, tomatoes, and Parmesan. Fold in the mushroom mixture and season again with salt and pepper. Pour into a 8" to 9" pie dish and bake until eggs are just set, 18 to 20 minutes. Let cool 3 minutes before slicing and serving.
  `,
  },
  {
    id: 2,
    name: "Homemade Strawberry Cake",
    imgUrl: "../../../../assets/img/strawberry-cake.jpg",
    time: 10,
    description:
      "Strawberry cake is sweet and tart and unmatched to other cakes. The cream cheese frosting is what really makes this cake. Making strawberry compote is easier than you'd think. All you're doing is cooking down the fresh berries with sugar and lemon juice. We used it in the batter and frosting to make sure that the cake has the best strawberry flavor possible. The compote will make a little more than you need, but you can use leftover just as you would jam! It will keep refrigerated for 1 week. ",
    ingredients: [
      "lemon",
      "sugar",
      "strawberries",
      "flour",
      "vanilla",
      "milk",
      "cheese",
      "baking soda",
    ],
    steps: `
    1. In a food processor, puree strawberries then add to a small saucepan with sugar and lemon juice. Place over medium low heat. Cook, stirring often, until thickened and reduce by about half, about 20 minutes. You should have about 1½ cups of strawberry compote. Remove from heat and let cool completely.
    2. Preheat oven to 350° and grease and line two 8” round cake pans. In a large bowl, whisk together flour, cornstarch, baking powder, baking soda, and salt. 
    3. In another large bowl, with a hand mixer, beat together butter and sugar until light and fluffy. Add eggs, one at a time, beating well after each addition. Beat in strawberry compote and vanilla until fully incorporated, then add milk. Add dry ingredients, mixing until just combined. (If you want a super pink cake, stir in some pink food coloring.)
    4. Divide batter evenly into prepared pans and bake until a toothpick inserted into the middle of each comes out clean, 25 minutes. Let cakes cool for 15 minutes then invert onto cooling racks to cool completely. 
    5. Make frosting: In a large bowl using a hand mixer, beat cream cheese and butter until no lumps remain, then beat in strawberry compote. Add powdered sugar and beat until fully incorporated. Add vanilla and a pinch of salt. If your frosting is too loose, refrigerate for 20 minutes before frosting the cake. 
    6. Spread a thick layer of frosting on top of one cake layer. Top with second layer of cake, then frost all over sides and top. Garnish with fresh strawberries, if using.
  `,
  },
  {
    id: 3,
    name: "Broccoli Cheesy Bread",
    imgUrl: "../../../../assets/img/broccoli-cheesy-bread.jpg",
    time: 15,
    description:
      "Wringing the steamed broccoli out with paper towel or cheesecloth insures your cheesy bread is crisp, not sogg",
    ingredients: [
      "egg",
      "broccoli",
      "garlic",
      "salt",
      "oregano",
      "black pepper",
      "parsley",
    ],
    steps: `
    1. Preheat oven to 425° and line a large baking sheet with parchment paper. Microwave riced broccoli for 1 minute to steam. Carefully ring out extra moisture from the broccoli using paper towel or cheese cloth.
    2. Transfer broccoli to a large bowl and add egg, 1 cup mozzarella, Parmesan, and garlic. Season with oregano, salt, and pepper. Transfer dough to baking sheet and shape into a thin, round crust. 
    3. Bake until golden and dried out, 20 minutes. Top with with remaining 1/2 cup mozzarella and bake until cheese is melted and crust is crispy, about 5 minutes.
    4. Garnish with parsley and pepper flakes if using. Serve warm with marinara.
  `,
  },
  {
    id: 4,
    name: "Perfect Omelet",
    imgUrl: "../../../../assets/img/omelet.png",
    time: 5,
    description:
      "In culinary school we learned that a chef is only as good as the omelet they make. Well, that's intimidating. I've since learned that it really doesn't have to be. Omelets are no scarier than good scrambled eggs. A gentle drag then fold creates the perfect blanket for cheese and your favorite fillings. Here are a few tips so you can be a master chef of breakfast. ",
    ingredients: ["egg", "butter", "salt", "red pepper", "cheddar", "chives"],
    steps: `
    1. In a medium bowl, beat eggs until no whites remain, then season with salt, pepper, and a pinch red pepper flakes.
    2. In a medium non-stick skillet over medium heat, melt butter. Pour in eggs and tilt pan so eggs fully cover the entire pan. As eggs start to set, use a rubber spatula to drag cooked edges into center of pan. Tilt pan to let uncooked egg fall to the edge of the pan. 
    3. Once the bottom is set, but top is still a little wet, sprinkle cheese and chives on one half of omelet. Fold other side over cheese and slide omelet onto a plate.  
  `,
  },
  {
    id: 5,
    name: "Sweet Potato Pancakes",
    imgUrl: "../../../../assets/img/",
    time: 25,
    description:
      "Mornings are not complete until a stack of pancakes has been placed down in front of us. These sweet potato pancakes are an amazing twist on the original that is perfect for a fall morning. Roast sweet potatoes to make your own puree or use canned; either way, you'll still have a fluffy, homemade pancake that's better than any box mix could produce. The added pecans will really make you feel like you're eating dessert on Thanksgiving. Who doesn't need excuse to day dream about pie right after waking up?",
    ingredients: [
      "flour",
      "baking powder",
      "baking soda",
      "brown sugar",
      "salt",
      "cinnamon",
      "nutmeg",
      "ginger",
      "buttermilk",
      "sweet potatoes",
      "egg",
      "vanilla",
    ],
    steps: `
    1. In a large bowl, whisk together flour, baking powder, baking soda, brown sugar, salt, cinnamon, nutmeg, and ginger. 
    2. In a separate bowl, whisk together buttermilk and sweet potato puree, then add eggs and vanilla.
    3. Add wet ingredients to dry ingredients and stir with a wooden spoon until just combined.
    4. Melt butter in a large nonstick skillet or griddle over medium heat. When butter is foamy, reduce heat to medium-low and ladle a scant ½ cup pancake batter into skillet. Cook until bubbles start to form in batter and pancake is golden underneath, about 3 minutes, then flip and cook other side until golden, another 3 minutes.
    5. Repeat with remaining batter. Serve with more butter, toasted pecans, and maple syrup.
    `,
  },
  {
    id: 6,
    name: "No-Bake Pumpkin Cheesecake",
    imgUrl: "../../../../assets/img/pumpkin-cheesecake.png",
    time: 25,
    description:
      "Figuring out how to make all of the pumpkin desserts during Thanksgiving while the turkey is in the oven can be a nightmare. That's why you need this no-bake cheesecake. It's a major time saver and while we love our classic pumpkin cheesecake, we go crazy for the no-bake option The gingersnap crust is a must and adds that extra layer of fall. Gently fold the fresh whipped cream into the batter so you don't loose it's beautiful volume. You can make this cheesecake a couple of days ahead of time and it even freezes well. We love it straight from the freezer, which will make for prettier slices.",
    ingredients: [
      "heavy cream",
      "cream cheese",
      "pumpkin puree",
      "vanilla",
      "sugar",
      "cinnamon",
      "salt",
      "nutmeg",
    ],
    steps: `
    1. In a medium bowl, combine crushed gingersnaps, sugar, and melted butter until mixture resembles wet sand. Pour into a 8” springform pan and pat into an even layer. 
    2. In a medium bowl, beat heavy cream to stiff peaks.
    3. In a large bowl beat cream cheese until light and fluffy. Add pumpkin puree and beat until no lumps remain. Add powdered sugar and beat again until no lumps remain. Add vanilla, cinnamon, nutmeg, and salt and beat until incorporated. Add whipped cream and fold in until just combined. Pour batter over crust and smooth top with an offset spatula.
    4. Refrigerate until set, at least 4 hours and up to overnight. 
    5. Serve with whipped cream and crushed gingersnaps. 
  `,
  },
  {
    id: 7,
    name: "Polenta Fries",
    imgUrl: "../../../../assets/img/polenta-fries.jpg",
    time: 40,
    description:
      "Craving a french fry style treat at home, but don't feel like frying? Polenta fries have a crispy outside yet creamy inside and are baked not fried. They take very little effort. A tube of prepared polenta (you can find in most grocery stores) is simply cut into fry shapes, drizzled with a little oil, seasoned, and baked. There's no dredging or soaking - easy. Serve it with ketchup or make your own garlic mayo. ",
    ingredients: [
      "moyannoaise",
      "garlic",
      "lemon juice",
      "mustard",
      "ketchup",
      "oil",
      "parmesan",
      "prepared polenta",
      "parsley",
    ],
    steps: `
    1. Preheat oven to 450°. Cut polenta in half crosswise. Cut each half into ½-inch thick planks. Cut each plank into four ½-inch fries. 
    2. Place polenta wedges on a rimmed baking sheet, drizzle with oil, and season with salt and pepper. Turn gently to coat with oil and arrange in a single layer. 
    3. Bake, turning halfway through, until golden and crisp, about 40 minutes. 
    4. Meanwhile, in a small bowl, stir together mayonnaise, garlic, lemon juice, parsley and mustard. Season with salt and pepper. 
    5. Transfer cooked fries to a serving platter. Sprinkle with parmesan cheese and parsley and serve with ketchup and garlic mayo.
  `,
  },
];
