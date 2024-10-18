-- Inserting data into UserProfile table
INSERT INTO UserProfile (UserName, FirstName, LastName, Email, ImageUrl) VALUES
('sc2003', 'Seth', 'Cohen', 'cohencomics@email.com', 'https://static.wikia.nocookie.net/ocwikia/images/8/82/SethCohen-S1-5.jpg/revision/latest?cb=20220903113213'),
('buffyfan99', 'Liam', 'O-Malley', 'angel@vamps.com', 'https://adira-collectibles.myshopify.com/cdn/shop/products/57_8907b21a-8552-4bc1-afb8-6e00223baa5e.jpg?v=1678546739'),
('r.Atwood', 'Ryan', 'Atwood', 'atwoodr@theoc.com', 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a3e1126-b217-413c-b628-b8515cd5d561_1400x1764.jpeg'),
('ekclark', 'Emily', 'Clark', 'ekc253@email.com', 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503834.jpg?w=740&t=st=1729106460~exp=1729107060~hmac=2f884ed64b2e0099deb6be5987ed0bdd87e2328b0db83deeda0175a7546f7105'),
('hrodriguez', 'Henry', 'Rodriguez', 'rodhen@email.com', 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?w=740&t=st=1729106498~exp=1729107098~hmac=b084c3ee2ef6737249e350dafe0cecac14baa5f8733d259ae2901d3705bb02d1'),
('cinder632', 'Cindy', 'Potts', 'cpotts@email.com', 'https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503812.jpg?w=740&t=st=1729106536~exp=1729107136~hmac=0382d1485be108285cc14f4ea1c9d24b7227129e0d22e5de2332588f47bd0230')

-- Inserting data into Flavor table
INSERT INTO Flavor (Name) VALUES
('Chocolate'),
('Vanilla'),
('Berry'),
('Mint'),
('Citrus'),
('Nuts'),
('Pumpkin'),
('Miscellaneous')

-- Inserting data into Category table
INSERT INTO Category (Name) VALUES
('Cakes'),
('Pastries'),
('Cookies'),
('Frozen'),
('Cupcakes'),
('Candies'),
('Puddings and Custards'),
('Drinks'),
('Miscellaneous')

-- Inserting data into Rating table
INSERT INTO Rating (StarCount, ImageUrl) VALUES
(5, 'https://cdn.creazilla.com/emojis/46106/star-emoji-clipart-xl.png'),
(4, 'https://cdn.creazilla.com/emojis/46106/star-emoji-clipart-xl.png'),
(3, 'https://cdn.creazilla.com/emojis/46106/star-emoji-clipart-xl.png'),
(2, 'https://cdn.creazilla.com/emojis/46106/star-emoji-clipart-xl.png'),
(1, 'https://cdn.creazilla.com/emojis/46106/star-emoji-clipart-xl.png');

-- Inserting data into Recipe table
INSERT INTO Recipe (Title, Ingredients, Directions, ImageUrl, CreateDateTime, FlavorId, CategoryId, UserProfileId) VALUES
('Pavlova', '4 large egg whites (use the yolks for lemon curd!)*
1 cup (200g) superfine sugar*
1 teaspoon pure vanilla extract
1/2 teaspoon cream of tartar*
1 teaspoon cornstarch', 'Preheat the oven to 350°F (177°C). Line a large baking sheet with parchment paper or a silicone baking mat. (Preliminary note: you will quickly reduce the oven to 200°F (93°C) in step 4.)
With a handheld mixer or a stand mixer fitted with a whisk attachment, beat the egg whites on medium-high speed until soft peaks form, about 5 minutes. Add the sugar in 2 additions, beating for 30 seconds between. Once all of the sugar has been added, turn the mixer up to high speed and continue beating until glossy stiff peaks form, about 2 minutes. The peaks should be stiff enough that you can hold the whisk upright and the peaks won’t move. Add the vanilla extract and beat for 1 more minute. The peaks should still be very stiff. If not, keep on mixing on high speed. Using a rubber spatula, fold in the cream of tartar and cornstarch.
Spread the pavlova mixture into an 8-9-inch circle (see note for mini size). You can make decorative peaks with the back of a large spoon if desired. Make sure the edges are relatively tall and there is a nice dip in the center.

Place pavlova in the oven. As soon as you close the oven door, reduce heat to 200°F (93°C). The pavlova will stay in the oven as it cools down to 200°F (93°C). Bake until the pavlova is firm and dry, about 90 minutes total. Rotate the baking sheet if you notice some spots browning. Try to limit how many times you open the oven as the cool air will interrupt the baking.
Turn the oven off and let the pavlova cool inside the oven. Once the pavlova is cool, you can store it covered at room temperature for up to 2 days. Or serve right away.
Once cool, top the pavlova with whipped cream and assorted toppings. Slice and serve.', 'https://sallysbakingaddiction.com/wp-content/uploads/2018/03/pavlova-3.jpg', GETDATE(), 3, 9, 1),

('Deviled Blondies', 'Topping

1 tablespoon soft butter 

2 tablespoons light brown sugar

1 rounded tablespoon Gochujang chili paste, or chili paste of your choice

Blondies

1 3/4 cups all-purpose flour

1 teaspoon baking powder

1 teaspoon kosher salt

3/4 cup granulated white sugar

1/2 cup packed light brown sugar

2 large eggs

2 teaspoons pure vanilla extract

2 sticks salted butter, melted and cooled slightly

1/2 cup macadamia nuts', 'Preheat the oven to 350 degrees F (175 degrees C). Grease a 9x9 cake pan and line the bottom with parchment paper.

For the sweet and spicy chili topping, combine butter, brown sugar, and Gochujang in a small bowl, and mix thoroughly into a smooth paste. Set aside at room temperature until needed.

For the blondie batter, combine flour, baking powder, and salt in a bowl; mix thoroughly to combine. Set aside.

Combine white sugar, brown sugar, eggs, and vanilla extract in a second bowl. Using an electric mixer beat until smooth and thick. Pour in melted butter, and beat until batter is smooth. Fold in macadamia nuts and flour mixture using a spatula, carefully stirring and folding just until the flour disappears. Transfer batter into the prepared cake pan and smooth out the top.

Transfer chili mixture on top in 12 evenly spaced dollops. Use the tip of a knife to make a flame design out of each dollop by running the knife in a few different dirctions. Make sure to push some of the chili mixture down into the batter as well. When done, the surface should have about a 50/50 ratio between red and blond streaks. Tap pan on the counter a few times.

Bake in the preheated oven until a toothpick inserted into the center comes out clean, 30 to 35 minutes.

Transfer to a wire rack and cool completely before removing brownies from pan. Cut into 9 brownies. For best results, serve chilled.', 'https://www.allrecipes.com/thmb/beGom4YGmRzJM7uHLygGmxkkzC4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DeviledBlondies8719173ChefJohn4x3-d8ba5326a55e4dd2a07d3a2e07b15e53.jpg', GETDATE(), 8, 9, 2),
('Chocolate mousse', '300g CADBURY Baking Dark Chocolate, roughly chopped
3 eggs, at room temperature
1/4 cup (55g) caster sugar
1 tbsp good-quality cocoa powder, sifted
300ml thickened cream
Whipped cream, to serve
Grated chocolate, to serve', 'Place the chocolate in a heatproof bowl over a pan of gently simmering water (dont let the bowl touch the water). Stir until melted. Remove bowl from heat and set aside to cool slightly.Place eggs and sugar in a large bowl and beat with electric beaters for 5 minutes, or until mixture is pale, thick and doubled in volume. Fold in cocoa powder and cooled chocolate until combined.In a separate bowl, whip cream until thickened (be careful not to over-beat). Use a large metal spoon to carefully fold the cream into the chocolate mixture, trying to keep the mixture as light as possible. Spoon into 6 serving glasses and chill in fridge for at least 1 hour. Remove from fridge 15 minutes before serving, then top with extra whipped cream and grated chocolate to serve.', 'https://img.taste.com.au/bVP0Yz9o/taste/2016/11/chocolate-mousse-image1-197540-1.jpg', GETDATE(), 1, 4, 3),
('Bread and butter pudding', '4 eggs
1/4 cup caster sugar
1 tsp vanilla extract
1/4 tsp Coles Cinnamon Ground
2 cups milk
300ml pure cream
8 thick slices white bread, crusts removed
40g butter, softened
1/2 cup sultanas
2 tbsp demerara sugar
Vanilla ice-cream, to serve', 'Preheat oven to 180°C/160°C fan-forced. Grease a 5cm-deep, 17cm x 28cm (base) baking dish. Whisk eggs, caster sugar, vanilla, cinnamon, milk and cream in a bowl.
Spread both sides of each bread slice with butter. Cut each slice in half diagonally. Arrange half the bread in rows in prepared dish. Sprinkle with half the sultanas. Repeat with remaining bread and sultanas. Pour egg mixture over bread. Sprinkle with demerara sugar. Bake for 30 to 35 minutes or until golden and set. Serve with ice-cream. ', 'https://img.taste.com.au/n6XwJ1Lt/taste/2010/01/bread-and-butter-pudding-117897-2.jpg', GETDATE(), 8, 7, 4),
('Flourless orange cake', 'Melted salted butter, to grease
2 oranges
3 eggs
215g (1 cup) caster sugar
300g (3 cups) almond meal
1 tsp gluten-free baking powder
Orange Syrup
1 orange
155g (3/4 cup) caster sugar', 'Preheat oven to 170°C. Place the oranges in a saucepan and cover with cold water. Bring to the boil over medium heat. Cook for 15 minutes or until tender. Drain. Return to pan and cover with cold water. Bring to the boil and cook for 15 minutes (this will reduce the bitterness of the peel). Refresh under cold water. Drain. Coarsely chop oranges. Remove and discard any seeds. Place the orange in the bowl of a food processor and process until smooth. Use an electric beater to whisk the eggs and sugar in a bowl until thick and pale. Add the orange, almond meal and baking powder and gently fold until just combined. Pour into prepared pan. Bake for 1 hour or until a skewer inserted into the centre comes out clean. Set aside for 15 minutes to cool.
Meanwhile, to make the orange syrup, use a zester to remove the rind from the orange. (Alternatively, use a vegetable peeler to peel the rind from orange. Use a small sharp knife to remove white pith. Cut rind into thin strips.) Juice orange.Place rind in a saucepan of boiling water and cook for 5 minutes or until soft. Drain. Return to pan with orange juice and sugar. Place over low heat and cook, stirring, for 2-3 minutes or until the sugar dissolves and the syrup thickens.', 'https://img.taste.com.au/qGzWJI0N/w643-h428-cfill-q90/taste/2016/11/flourless-orange-cake-25578-1.jpeg', GETDATE(), 5, 1, 5),
('Double Chocolate Banana Bread', '4 overripe bananas I like to stick ripe bananas in the freezer and then let them thaw before making banana bread so I always have overripe bananas on hand
▢½ cup unsalted butter, melted
▢¾ cup white sugar
▢1 large egg
▢1 teaspoon chocolate extract, vanilla extract works too
▢1 cup all-purpose flour
▢1 teaspoon baking soda
▢½ teaspoon kosher salt
▢½ cup cocoa powder
▢1 cup semi-sweet chocolate chips', 'Preheat oven to 350°F.
Spray a 9×5-inch loaf pan with a nonstick baking spray.
In a large stand mixer, combine the butter and sugar and whip for 2 minutes until combined. Add the egg, scraping down the sides of the bowl to make sure everything is evenly combined. Add the extract and the bananas and mix for 30 seconds. The batter will look a little curdled, this is normal.
Add the flour, cocoa powder, baking soda and salt and mix for a few seconds until the flour is evenly combines. Add the chocolate chips and give it all a quick stir.
Pour into the prepared loaf pan and bake for 55 to 65 minutes. Let cool for at least 30 minutes before running a knife around the perimeter of the loaf pan and inverting the banana bread and transferring the loaf onto a cooling rack. Slice and serve as needed.', 'https://whatsgabycooking.com/wp-content/uploads/2020/03/All-Clad-__-Double-Chocolate-Banana-Bread-1.jpg', GETDATE(), 1, 7, 4),
('Strawberry Ice Cream with Oreos', '1½ cups fresh strawberries stemmed and sliced
▢2 tablespoons fresh lemon juice
▢¾ cups sugar
▢¾ cups whole milk
▢1⅓ cups heavy cream
▢1½ teaspoon pure vanilla extract
▢10 oreos smashed
▢¼ cup mini chocolate chips', 'In a small bowl combine the strawberries and lemon juice and ½ cup of the sugar. Combine ingredients and let sit for at least 2 hours. Strain the juice and reserve. Puree the rest of the berries and set aside.
In another bowl combine the milk and remaining sugar until fully dissolved. Stir in the heavy cream, strawberry juice, pureed strawberries and vanilla. Turn the ice cream machine on and pour the mixture into the freezer bowl. Mix until thickened, about 25-30 minutes. 5 minutes before it is done add the mashed Oreo cookies and the chocolate chips. Once done you can eat immediately or freeze for a firmed consistency.', 'https://whatsgabycooking.com/wp-content/uploads/2023/08/WGC-__-Strawberry-Ice-Cream.jpg', GETDATE(), 3, 4, 3),

('Blueberry Crumb Cakes', 'For the Crumb Cake
▢8 tablespoons unsalted butter at room temp
▢1 ¼ cup white sugar
▢2 tablespoons fresh lemon zest
▢1 large egg
▢1 egg yolk
▢1 tablespoon vanilla extract
▢1 cup buttermilk**
▢2 cups all purpose flour
▢1 teaspoon baking powder
▢1 teaspoon baking soda
▢1 teaspoon kosher salt
▢2 cups fresh blueberries
▢2 tablespoons all purpose flour
For the Lemon Crumb Topping
▢¼ cup all purpose flour
▢¼ cup light brown sugar
▢⅛ teaspoon kosher salt
▢1 tablespoon fresh lemon zest
▢4 tablespoons unsalted butter melted', 'Preheat your oven to 350°F. And toss the blueberries with the 2 tablespoons of flour and set aside.
In a small bowl, combine the flour, baking powder, baking soda, and salt and set aside.

In a large mixer cream together the butter and sugar for 2-3 minutes. Add the zest, eggs, and vanilla and beat well for an additional 2-3 minutes making sure to scrape down the sides.
Alternate adding the flour, and the buttermilk until all is combined, making sure to scrape down the sides during the process. Stir in the floured blueberries.
Butter and flour 2 cupcake tins. Divide the batter evenly into each cupcake mold.
Make the lemon crumb topping by combining all those ingredients. Using your fingers, mix it around until its crumbly and sprinkle the top with some of the crumb mixture.
Bake for approximately 25 – 30 minutes, or until the cake is light and fluffy. Remove from the oven and let cool before serving.', 'https://whatsgabycooking.com/wp-content/uploads/2023/03/WGC-__-Blueberry-Crumb-Cakes-1.jpg', GETDATE(), 3, 1, 2),
('Oatmeal Chocolate Chip Cookies', '▢1 cup unsalted butter softened
▢1 ½ cup dark brown sugar
▢2 large eggs
▢2 teaspoon pure vanilla extract
▢2 cups all-purpose flour
▢1 teaspoon baking soda
▢1 teaspoon sea salt
▢½ teaspoon baking powder
▢1 ¾ cups old-fashioned oats
▢12 oz chocolate chips
▢maldon sea salt flakes for dusting', 'In a large mixer, combine the softened butter and brown sugar with a paddle attachment. Let combine for 3 minutes. Add the eggs one at a time, followed by the vanilla extract. Add the flour, baking soda, sea salt and baking powder and slowly combine, making sure not to over mix the batter. Add the oats and chocolate chips and combine. Refrigerate batter for at least 1 hour.
Preheat the oven to 350 degrees. Line 2 baking sheets with parchment paper and set aside.

Using a 2 tablespoon scoop, scoop 12 cookies onto each parchment lined baking sheet and dust with a few maldon sea salt flakes. Transfer sheets into the oven and bake for 10-12 minutes. At the 6 minute mark, take the pan out and bang it to deflate the cookies, and then transfer back to the oven and bake until the cookies just slightly turn a golden brown color on the edges but are still soft and chewy in the middle. Remove from the oven, transfer to the cooling rack. Repeat process for remaining dough
Cool the cookies completely before packing up and storing in an air-tight container.', 'https://whatsgabycooking.com/wp-content/uploads/2023/02/WGC-__-Oatmeal-Chocolate-Chip-Cookies-3.jpg', GETDATE(), 1, 3, 3),
('Brown Butter Bourbon Pecan Pie', '1 cup light corn syrup
▢3 eggs
▢1 cup granulated sugar
▢4 tablespoons butter
▢1 teaspoon vanilla
▢2 tablespoons bourbon
▢1 ¼ cups chopped pecans
▢Flaky Sea Salt
▢1 piece store bought or homemade pie dough
▢whipped cream or vanilla ice cream', 'Preheat oven to 350.
Place rolled out pie dough into a 9in pie dish. Crimp edges as desired, place in the freezer for 15 min while you make the filling.
In a small stainless steel skillet, melt the butter over medium-low heat. It will melt first, and then foam. After it foams, it will start to turn brown and smell nutty. Watch closely and stir often. As SOON as the butter is golden brown remove from heat and let cool slightly.
In a bowl mix corn syrup, eggs, sugar, brown butter, vanilla and bourbon, fold in pecans and pour the mixture into the chilled unbaked crust. Sprinkle with flake salt and place the pie on a baking sheet and bake in the oven for 60-70 minutes. When the pies internal temp reaches 200 degrees, its done. Cool for a few hours before serving with whipped cream.', 'https://whatsgabycooking.com/wp-content/uploads/2023/11/WGC-Thanksgiving-Brown-Butter-Bourbon-Pecan-Pie-2.jpg', GETDATE(), 6, 2, 4),
('Dads Kitchen Sink Cookies', '1 cup butter
1 cup white sugar
1 cup brown sugar
2 eggs
2 teaspoons vanilla extract
2 cups all purpose flour
2 1/2 cups old fashioned oats pulverized
1 teaspoon baking soda
1 teaspoon baking powder
1 teaspoon salt
1 cup M&Ms
1 cup semi sweet chocolate chips
1 cup dried cranberries
1 cup chopped dried apricots', 'uctions
 
Preheat your oven to 375 degrees F.
In a large stand mixer, cream together the butter and sugar for 2-3 minutes until fluffy.
Add the eggs one at a time, scraping down the sides in between additions. Add the vanilla and incorporate.
In a large bowl, combine the flour, pulverized oats (just measure 2 ½ cups of oats and blend them in a high powered blender for a few seconds to break them down), baking soda, baking powder and salt. Mix everything together. Add the dry ingredients into the wet ingredients in 2 batches and mix on a low speed.
Add the M&Ms, chocolate chips, dried cranberries and dried apricot and mix for a few seconds until just incorporated.
Using a medium sized cookie scoop, place 12 balls of dough onto a parchment lined baking sheet.
Transfer the baking sheet into the oven and bake for 10-12 minutes depending on how chewy you want your cookies. Im a 10.5 minute kind of cookie baker.
Remove the cookies from the oven once they are baked and let them cool for 5 minutes on the baking sheet before transferring them to a cooling rack.
Freeze them as needed so you always have some on hand ', 'https://whatsgabycooking.com/wp-content/uploads/2017/10/WGC-__-Dads-Everything-but-the-Kitchen-Sink-Cookies2.jpg', GETDATE(), 1, 3, 2),
('Soft Banana Cookies', '▢2 ripe medium bananas
▢½ cup almond butter
▢¼ cup water
▢1 tablespoon vanilla extract
▢1 cup flour (you can sub for almond flour if you prefer)
▢1 tablespoon chia seeds
▢1 tablespoon hemp hearts
▢1 tablespoon cacao powder
▢1 teaspoon baking powder
▢1 teaspoon cinnamon
▢½ teaspoon salt
▢⅓ cup mini dark chocolate chips', 'Preheat the oven to 350 degrees and line a baking sheet with parchment paper.
In a stand mixer, beat together bananas, almond butter, water and vanilla until smooth. Add the almond flour, chia seeds, hemp hearts, cacao powder, baking powder, cinnamon and salt and mix until combined. Fold in chocolate chips.
Place 12 cookies onto the baking sheet evenly, 2-3 tablespoons each.
If you have more banana, add a slice to the top of each cookie.
Bake for 13-15 minutes - you want them to still be a little soft. Cool and serve.', 'https://whatsgabycooking.com/wp-content/uploads/2022/02/WGC-Baby-Soft-Banana-Cookies-1-copy-819x1024.jpg', GETDATE(), 1, 3, 4),
('Peach Blackberry Cobbler', 'For the Fruit

▢8 ripe peaches
▢1 ½ cups blackberries
▢1 tablespoon all purpose flour
▢1-2 teaspoons fresh lemon juice
▢1 teaspoon lemon zest
▢1 teaspoon kosher salt
▢2 tablespoons brown sugar
For the Cobbler Topping
▢1 ¼ cup all purpose flour
▢½ cup brown sugar
▢2 teaspoon baking powder
▢1 teaspoon cinnamon
▢½ teaspoon kosher salt
▢6 tablespoons butter chilled
▢1 egg
▢½ cup buttermilk
▢1 teaspoon vanilla extract
▢vanilla ice cream to serve', 'Preheat oven to 375 degrees F.

Using a sharp knife, cut a small cross hatch at the bottom of the peaches. Bring a large pot of water to a boil on the stove. Add the peaches into the boiling water, a few at a time, and let cook for 45 seconds. Remove with a slotted spoon and set aside to cool. Repeat with remaining peaches. Once peaches have cooled enough to hold, peel off the skins and then cut them up into slices, discarding the pit.
Transfer sliced peaches to a large bowl. Add the blackberries, flour, lemon juice and zest, salt and brown sugar and toss together. Transfer fruit mixture into a large baking dish and transfer into the oven, bake for 10 minutes and remove.
Prepare the biscuit dough by combining the flour, brown sugar, baking powder, cinnamon and salt in a medium bowl. Cut in the chilled butter with a pastry cutter. Add in the egg, buttermilk and vanilla and mix until shaggy. Pile the topping onto the partially cooked fruit mixture using a spoon and randomly drop scoops along the surface of the cobbler.
Place the dish into the oven and bake for about 30 minutes until the top is slightly puffed and golden brown. Let cool for about 10 minutes before serving. Serve with vanilla ice cream.', 'https://whatsgabycooking.com/wp-content/uploads/2022/06/WGC-__-Blackberry-Cobbler.jpg', GETDATE(), 3, 2, 5),

('Smore Cheesecake Pops', '1 8- ounce brick cream cheese
1/ cup sour cream
1/4 cup mini marshmallows
1/2cup mini chocolate chips
9whole graham crackers
3 tablespoons butter melted
3 ounce dixie paper cups', 'In a food processor, add cream cheese, sour cream, powdered sugar, almond milk, and vanilla extract. Process until well combined and silky. Transfer to a bowl and stir in the mini marshmallows and mini chocolate chips.
Pour mixture into 3 ounce paper cups, leaving about ½ inch of the top empty for the graham cracker crust.
In a clean food processor, add graham crackers and process until fine crumbs remain. While food processor is running, add melted butter in a slow stream until the mixture resembles wet sand.
Divide the crust evenly between the pops, pressing down gently to compact. Insert popsicle sticks. Freeze for at least 6 hours until solid. When ready to serve, gently tear the paper cups off the pops and serve.', 'https://whatsgabycooking.com/wp-content/uploads/WGC-S%E2%80%99more-Cheesecake-Pops-copy.jpg', GETDATE(), 2, 4, 5);
-- Pavlova Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Amazing Pavlova', 'The pavlova was light and fluffy with a perfect crunch. Topped it with fresh berries and it was a hit!', GETDATE(), 1, 1),
('Delicious but tricky', 'It was delicious but took some practice to get the peaks just right. Worth the effort!', GETDATE(), 1, 2),
('Best Pavlova ever!', 'This recipe is fantastic. The instructions are clear and the result is a beautiful, tasty pavlova.', GETDATE(), 1, 3),
('Too sweet for my taste', 'While the texture was great, I found it a bit too sweet for my liking.', GETDATE(), 1, 4),
('Great for parties', 'Made this for a dinner party and everyone loved it. The presentation was beautiful.', GETDATE(), 1, 5),
('Perfect every time', 'I have made this pavlova several times and it always turns out perfect. Highly recommend!', GETDATE(), 1, 6);

-- Deviled Blondies Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Sweet and spicy!', 'These blondies have a unique kick with the chili paste. Loved the combination!', GETDATE(), 2, 1),
('Not for everyone', 'The spice was a bit too much for my kids, but I enjoyed the twist on a classic blondie.', GETDATE(), 2, 2),
('Great flavor', 'The flavors were amazing. The recipe was easy to follow and the blondies turned out perfect.', GETDATE(), 2, 3),
('Interesting mix', 'I was skeptical about the chili paste but it worked surprisingly well. Will make again.', GETDATE(), 2, 4),
('Loved the spice', 'As a fan of spicy food, these blondies were a pleasant surprise. Perfect balance of sweet and heat.', GETDATE(), 2, 5),
('Not a fan of the spice', 'The blondies were okay but I prefer them without the chili paste. Too unusual for my taste.', GETDATE(), 2, 6);

-- Chocolate Mousse Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Rich and creamy', 'The mousse was incredibly rich and creamy. A decadent dessert!', GETDATE(), 3, 1),
('Perfect texture', 'This mousse had the perfect airy texture. Will definitely make it again.', GETDATE(), 3, 2),
('Too rich for me', 'While it was good, I found it a bit too rich. A little goes a long way.', GETDATE(), 3, 3),
('Easy to make', 'Surprisingly easy to make for such a sophisticated dessert. Highly recommend.', GETDATE(), 3, 4),
('Family favorite', 'My family loved it. We added some whipped cream on top and it was perfect.', GETDATE(), 3, 5),
('Chocolate lover’s dream', 'As a chocolate lover, this mousse was heavenly. Smooth, rich, and full of flavor.', GETDATE(), 3, 6);

-- Bread and Butter Pudding Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Comfort food', 'This pudding was the ultimate comfort food. Warm, creamy, and delicious.', GETDATE(), 4, 1),
('Easy and tasty', 'Very easy to make and turned out delicious. Will make again.', GETDATE(), 4, 2),
('A bit too sweet', 'Tasted good but was a bit too sweet for my liking. Will reduce the sugar next time.', GETDATE(), 4, 3),
('Perfect dessert', 'The perfect dessert for a cold night. We enjoyed it with some vanilla ice cream.', GETDATE(), 4, 4),
('Great texture', 'The texture was perfect, with a crispy top and a soft, custardy interior.', GETDATE(), 4, 5),
('My kids loved it', 'Made this for my kids and they devoured it. Will be making it regularly.', GETDATE(), 4, 6);

-- Flourless Orange Cake Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Moist and flavorful', 'The cake was incredibly moist and had a wonderful orange flavor. Loved it!', GETDATE(), 5, 1),
('Gluten-free win', 'As someone who is gluten-free, this cake was a delightful find. Tasted amazing.', GETDATE(), 5, 2),
('A bit bitter', 'The cake was good but a bit bitter due to the orange peel. Will try to adjust next time.', GETDATE(), 5, 3),
('Easy and delicious', 'Very easy to make and turned out delicious. My family enjoyed it.', GETDATE(), 5, 4),
('Great with coffee', 'Had this cake with my morning coffee and it was perfect. Will make again.', GETDATE(), 5, 5),
('Beautiful presentation', 'The cake not only tasted great but also looked beautiful. Perfect for entertaining.', GETDATE(), 5, 6);

-- Double Chocolate Banana Bread Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Chocoholic’s dream', 'If you love chocolate, you’ll love this banana bread. Rich and delicious.', GETDATE(), 6, 1),
('Too much chocolate', 'A bit too much chocolate for my taste but my kids loved it.', GETDATE(), 6, 2),
('Perfectly moist', 'The banana bread was perfectly moist and the chocolate added a nice touch.', GETDATE(), 6, 3),
('Easy recipe', 'Very easy recipe to follow and the result was fantastic. Will make again.', GETDATE(), 6, 4),
('Great for breakfast', 'Had this for breakfast with some coffee. Perfect way to start the day.', GETDATE(), 6, 5),
('Delicious treat', 'A delicious treat that was easy to make. Will be a regular in our house.', GETDATE(), 6, 6);

-- Strawberry Ice Cream with Oreos Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Refreshing and tasty', 'This ice cream was refreshing and tasty. Loved the addition of Oreos.', GETDATE(), 7, 1),
('Too sweet', 'A bit too sweet for my liking but the kids loved it.', GETDATE(), 7, 2),
('Perfect summer treat', 'Perfect treat for a hot summer day. Will make it again.', GETDATE(), 7, 3),
('Easy and fun', 'Fun to make with the kids and turned out great. Everyone enjoyed it.', GETDATE(), 7, 4),
('Delicious combination', 'The combination of strawberries and Oreos was delicious. Highly recommend.', GETDATE(), 7, 5),
('Great texture', 'Loved the texture and the taste was fantastic. Will definitely make again.', GETDATE(), 7, 6);

-- Blueberry Crumb Cakes Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Perfect breakfast', 'These crumb cakes were perfect for breakfast. Light and tasty.', GETDATE(), 8, 1),
('A bit dry', 'The crumb cakes were a bit dry for my taste. Will try to add more moisture next time.', GETDATE(), 8, 2),
('Delicious and easy', 'Delicious and easy to make. The blueberries were a great addition.', GETDATE(), 8, 3),
('Family favorite', 'My family loved these crumb cakes. Will be making them regularly.', GETDATE(), 8, 4),
('Great with coffee', 'Had these with my morning coffee and they were perfect. Highly recommend.', GETDATE(), 8, 5),
('Loved the crumb topping', 'The crumb topping was delicious and added a nice texture to the cakes.', GETDATE(), 8, 6);

-- Oatmeal Chocolate Chip Cookies Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Perfectly chewy', 'These cookies were perfectly chewy and the chocolate chips were a great addition.', GETDATE(), 9, 1),
('Too sweet for me', 'A bit too sweet for my taste but my kids loved them.', GETDATE(), 9, 2),
('Great texture', 'Loved the texture and the flavor. Will make again.', GETDATE(), 9, 3),
('Easy to make', 'Very easy to make and turned out delicious. Highly recommend.', GETDATE(), 9, 4),
('Great for snacking', 'Perfect for snacking. Will be a regular in our house.', GETDATE(), 9, 5),
('Classic cookies', 'A classic cookie recipe that turned out great. Will definitely make again.', GETDATE(), 9, 6);

-- Brown Butter Bourbon Pecan Pie Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Rich and flavorful', 'The pie was rich and flavorful. The bourbon added a nice depth.', GETDATE(), 10, 1),
('Perfect for holidays', 'Made this for Thanksgiving and it was a hit. Perfect holiday dessert.', GETDATE(), 10, 2),
('A bit too boozy', 'Found it a bit too boozy for my taste but the texture was great.', GETDATE(), 10, 3),
('Easy and delicious', 'Very easy to make and turned out delicious. Will make again.', GETDATE(), 10, 4),
('Family favorite', 'My family loved this pie. The brown butter and bourbon were a great combination.', GETDATE(), 10, 5),
('Decadent treat', 'A decadent treat that was worth the effort. Highly recommend.', GETDATE(), 10, 6);

-- Dad's Kitchen Sink Cookies Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Packed with flavor', 'These cookies were packed with flavor. Loved the variety of ingredients.', GETDATE(),  11, 1),
('Too many flavors', 'A bit too many flavors for my taste but my family enjoyed them.', GETDATE(),  11, 2),
('Perfect for snacking', 'Perfect for snacking. Will be making these regularly.', GETDATE(), 11, 3),
('Fun to make', 'Fun to make with the kids and turned out great. Everyone enjoyed them.', GETDATE(),  11, 4),
('Great texture', 'The texture was perfect and the flavor was amazing. Highly recommend.', GETDATE(),  11, 5),
('A bit too rich', 'Found them a bit too rich but they were still good. Will make again with some adjustments.', GETDATE(), 11, 6);

-- Soft Banana Cookies Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Soft and delicious', 'These cookies were soft and delicious. Loved the addition of chia seeds.', GETDATE(),  12, 1),
('Too soft for me', 'A bit too soft for my liking but the flavor was great.', GETDATE(),  12, 2),
('Perfect for breakfast', 'Perfect for breakfast or a quick snack. Will make again.', GETDATE(),  12, 3),
('Healthy and tasty', 'Healthy and tasty. The chia seeds and hemp hearts were a great addition.', GETDATE(),  12, 4),
('Easy to make', 'Very easy to make and turned out great. Highly recommend.', GETDATE(),  12, 5),
('Family favorite', 'My family loved these cookies. Will be making them regularly.', GETDATE(),  12, 6);

-- Peach Blackberry Cobbler Reviews
INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId) VALUES
('Perfect for fall', 'This cobbler was perfect for fall. The warm fruit and the cobbler topping were great.', GETDATE(),  13, 1),
('A bit too tart', 'The cobbler was good but a bit too tart for my taste. Will adjust next time.', GETDATE(),  13, 2),
('Easy and delicious', 'Very easy to make and turned out delicious. My family enjoyed it.', GETDATE(), 13, 3),
('Great with ice cream', 'Had this with some vanilla ice cream and it was perfect. Highly recommend.', GETDATE(), 13, 4),
('Perfect dessert', 'The perfect dessert for any occasion. Will definitely make again.', GETDATE(), 13, 5),
('Loved the combination', 'Loved the combination of peaches and blackberries. A delightful dessert.', GETDATE(), 13, 6);

-- Inserting data into SavedRecipe table
INSERT INTO SavedRecipe (RecipeId, UserProfileId) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 4),
(2, 5),
(3, 2),
(3, 3),
(3, 6),
(4, 4),
(4, 5),
(4, 6),
(5, 1),
(5, 2),
(5, 3),
(6, 4),
(6, 5),
(6, 6),
(7, 1),
(7, 2),
(7, 3),
(8, 4),
(8, 5),
(8, 6),
(9, 1),
(9, 2),
(9, 3),
(10, 4),
(10, 5),
(10, 6),
(11, 1),
(11, 2),
(11, 3),
(12, 4),
(12, 5),
(12, 6),
(13, 1),
(13, 2);











