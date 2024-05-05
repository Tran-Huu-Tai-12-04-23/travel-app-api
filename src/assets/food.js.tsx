const foods = [
   {
      name: 'Cơm Tấm',
      lstImgs: [
         'https://i.ytimg.com/vi/cJu6tFJe_Gc/maxresdefault.jpg ',
         'https://comtamthuankieu.com.vn/wp-content/uploads/2020/12/IMG_0081-scaled.jpg ',
         'https://seabreezevictoria.com/wp-content/uploads/2024/01/com-tam-suon-bi-cha-2.jpg ',
      ],
      rangePrice: [40000, 100000],
      address: '236 Dinh Tien Hoang Street, Da Kao Ward, District 1',
      coordinates: [10.792616316515204, 106.69609668620878],
      description:
         "Broken Rice (Com tam) is a popular dish in Saigon, Southern Vietnam. It consists of rice made from broken grains, which are the broken pieces of rice grains during the milling process. This dish is typically served with grilled pork ribs, shredded pork skin, steamed pork meatloaf, and a omelet. Additionally, pickled vegetables, such as pickled carrots and daikon radish, are essential accompaniments to the dish. The combination of sweet and sour fish sauce and seasoned broth is the soul of cơm tấm. Saigon's Broken Rice offers a unique and diverse flavor, showcasing the distinctive culinary character of the city. It is a true culinary specialty.",
   },
   {
      name: 'Bánh Mì',
      lstImgs: [
         'https://hips.hearstapps.com/hmg-prod/images/banh-mi-with-grilled-pork1-1663331872.jpg',
         'https://www.andy-cooks.com/cdn/shop/articles/20230813061131-andy-20cooks-20-20roast-20pork-20banh-20mi.jpg ',
         'https://thanhnien.mediacdn.vn/Uploaded/trantam/2022_11_17/anh-chup-man-hinh-2022-10-07-luc-172838-4541-9511.png ',
      ],
      rangePrice: [20000, 35000],
      address: '26 Le Thi Rieng Street, Ben Thanh Ward, District 1',
      coordinates: [10.771512806468076, 106.69239367167462],
      description:
         'Vietnamese Banh Mi is a distinctive and globally renowned dish. It is known for its perfect combination of crispy toasted bread and diverse fillings. Common fillings include grilled pork, barbecued pork (xa xiu), or grilled chicken. The meat is cooked or grilled with various spices to create a rich flavor. In addition to meat, Banh Mi can also include ingredients such as pate, sausages, fried eggs, or vegetarian options with vegetables. It is served with sauces such as mayonnaise, chili sauce, or soy sauce. Banh Mi is considered a quick, convenient, and popular street food in Vietnam. It can be found in sandwich shops, eateries, and even street food carts. With its balanced and diverse flavors, Vietnamese Banh Mi is a fascinating and unique dish loved worldwide.',
   },
   {
      name: 'Bún Đậu',
      lstImgs: [
         'https://dauhomemade.vn/apps/uploads/2018/09/da%CC%82%CC%80y-du%CC%89-scaled-e1672490363436.jpg',
         'https://cdn.vn.alongwalk.info/wp-content/uploads/2023/01/28095133/image-top-5-quan-bun-dau-mam-tom-quan-8-nhat-dinh-phai-di-57d7abb74ec31d431b44596cc9811355.jpg ',
         'https://images2.thanhnien.vn/528068263637045248/2023/3/29/a093347d0a27d6798f36-1-1680068642512846842540.jpg ',
      ],
      rangePrice: [60000, 80000],
      address: '158 Pasteur Street, Ben Nghe Ward, District 1',
      coordinates: [10.777184289972011, 106.69987750836921],
      description:
         'Bun Dau Mam Tom is a famous dish in Vietnam, popular from the North to the South. This dish typically consists of bun - a soft white vermicelli noodle paired with crispy fried tofu and flavorful shrimp paste. With its distinctive and diverse flavors, Bun Dau Mam Tom is a perfect combination of main ingredients and various vegetable such as lettuce, cucumber, chili, and perilla. Additionally, in some places, this dish is often served with other side dishes like green sticky rice patties. (Cha Com), fried fermented pork roll (Nem Chua Ran), etc. With its rich and varied taste profiles, Bun Dau Mam Tom is one of the most attractive and popular dishes in Vietnamese cuisine.',
   },
   {
      name: 'Gỏi Cuốn',
      lstImgs: [
         'https://comtambason.com/wp-content/uploads/2020/12/Goi-cuon.jpg',
         'https://helenrecipes.com/wp-content/uploads/2021/06/imgpsh_fullsize-scaled.jpg',
         'https://www.tasteatlas.com/images/dishes/5fd6cc95e23f4d1eb34009678c2d6556.jpg',
      ],
      rangePrice: [5000, 10000],
      address: '76 Vo Van Tan Street, District 3',
      coordinates: [10.776528308679042, 106.69001391739705],
      description:
         'Goi cuon is usually served as an appetizer, a dish to share, or a snack. One of the reasons that make gỏi cuốn appealing to diners is its freshness. The rice paper, which serves as the outer wrapping, is an essential component of this dish. The filling can consist of various ingredients, such as fish, meat, and vegetables, but the most common ones are boiled pork, boiled shrimp, fresh vermicelli noodles, thinly sliced cucumber, cilantro, carrots marinated in vinegar, or julienned green mango, along with herbs and lettuce. All these ingredients are rolled together, creating a vibrant and enticing combination of colors: the white of the thin rice paper, the green of the herbs, cucumber, and raw vegetables, and the reddish hue of the shrimp. One distinctive aspect of gỏi cuốn is that the ingredients are not cooked in oil and incorporate a generous amount of fresh greens. Therefore, goi cuon is truly a delicious, wholesome, and healthy dish.',
   },
   {
      name: 'Bánh Tráng Nướng',
      lstImgs: [
         'https://image.cooky.vn/recipe/g6/55029/s/fa7079ae-224c-4213-8451-87dd351aaa66.jpeg ',
         'https://statics.vinpearl.com/banh-trang-nuong-da-lat-8_1690465786.jpg ',
         'https://i.ytimg.com/vi/S7htO6EVF78/maxresdefault.jpg ',
      ],
      rangePrice: [20000, 30000],
      address: '386/43B Le Van Si Street, Ward 14, District 3',
      coordinates: [10.789634129021549, 106.67726378185863],
      description:
         'Bánh tráng nướng is a popular and traditional street food in Vietnam. It is typically made from fresh or dried rice paper. The rice paper is evenly coated with ingredients such as eggs, scallion oil, spices, fish cake, dried shrimp, dried squid, fried shallots, and other seasonings. Some people even add a layer of cheese on top of the rice paper to create a delicious, aromatic cheesy flavor. Once the rice paper is prepared and the seasonings are added, it is grilled over charcoal or a wood-fired stove. The bánh tráng is grilled until it becomes slightly crispy and develops an attractive golden brown color. The grilling process creates a crispy outer shell and a soft, smooth inner layer, resulting in a delightful combination of ingredients and flavors. With its fantastic taste and simple preparation, bánh tráng nướng has become an important part of Vietnamese cuisine. It is a beloved street food that can be found in various street stalls and is cherished for its unique texture and flavors.',
   },
   {
      name: 'Bánh Xèo',
      lstImgs: [
         'https://cdn.tgdd.vn/2020/12/CookProduct/11-1200x676.jpg',
         'https://i.ytimg.com/vi/hxI-i5jAeB8/maxresdefault.jpg ',
         'https://ik.imagekit.io/tvlk/blog/2022/08/banh-xeo-dac-san-o-dau-3-1024x683.jpeg ',
      ],
      rangePrice: [10000, 20000],
      address: '164 Nguyen Thi Nho Street, District 11',
      coordinates: [10.775065114127036, 106.65334605755862],
      description:
         'Banh Xeo is a traditional and popular dish in Vietnamese cuisine. The preparation process starts by making a batter from rice, and coconut milk thencreating a smooth and slightly thick mixture. Other ingredients such as green onions, pork, shrimp, mung beans, and seasonings like scallion oil, and fish sauce are added to create the distinctive flavor. Once cooked, Banh Xeo has a thin, crispy, golden-yellow crust. To enjoy Banh Xeo, it is typically removed from the pan and wrapped in fresh rice paper along with various herbs like basil and lettuce. It is often served with condiments such as sweetened fish sauce. Banh Xeo provides a delightful combination of flavors and a diverse culinary experience. The crispy texture of the crust, combined with the savory and aromatic fillings, creates a wonderful balance of tastes. Banh Xeo can be enjoyed as a main dish or as a snack, and it is an essential part of Vietnamese street food.',
   },
   {
      name: 'Bánh Bèo',
      lstImgs: [
         'https://cdn.tgdd.vn/2021/07/CookProduct/bthum-1200x676-2.jpg ',
         'https://cdn.tgdd.vn/2021/07/CookProduct/bthum-1200x676-2.jpg ',
         'https://thucpham5sao.vn/upload/sanpham/large/banh-beo-tom-thit-khong-tinh-bot-1640588887-533aba.jpg ',
      ],
      rangePrice: [3000, 6000],
      address: '45C Ky Dong Street, Ward 9, District 3',
      coordinates: [10.780475193080763, 106.68123827080241],
      description:
         "Banh Beo is one of the distinctive dishes of the Central and South Central regions of Vietnam. These small and charming cakes are made from rice flour and water, creating a thin, soft, yet substantial layer. Banh Beo is often garnished with fried shallots and either shrimp or finely diced pork, adding a unique and flavorful touch. Particularly, it is commonly enjoyed with sweet and sour fish sauce, creating a perfect harmony of sweet, salty, and sour flavors that captivates diners. With its petite appearance and delicate taste, Banh Beo is not only a delicious dish but also an icon of Vietnam's rich and diverse cuisine.",
   },
   {
      name: 'Bánh Căn',
      lstImgs: [
         'https://dulichkhampha24.com/wp-content/uploads/2022/10/banh-can-da-nang-1.jpg',
         'https://sktravel.com.vn/wp-content/uploads/2022/01/nhung-quan-banh-can-ngon-nhat-nha-trang-2.jpg ',
         'https://thanhnien.mediacdn.vn/Uploaded/hoangnam/2022_08_18/15c-3419.jpg ',
      ],
      rangePrice: [6000, 8000],
      address: '222/6A Bui Dinh Tuy, Ward 12, Binh Thanh District',
      coordinates: [10.808360732258805, 106.7019737139345],
      description:
         'Banh Can is a type of cake developed in the South Central region of Vietnam. It is mainly made from a special type of rice flour, prepared according to a unique recipe. After soaking the rice in water, it is finely ground along with a bit of dried rice, then poured onto clay molds and grilled directly over charcoal. Afterwards, shrimp, squid, and eggs are added to make the filling. Banh Can is typically served with pickled star fruit, green mango, or cucumber. The dipping sauces for this dish include: a sauce with ground pork, diluted fish sauce with garlic and chili, scallion oil, and braised fish sauce. With these combinations, Banh Can is an experience worth trying when visiting Vietnam.',
   },
   {
      name: 'Bánh Giò',
      lstImgs: [
         'https://cdn.tgdd.vn/2021/05/CookProduct/Banh-gio-la-gi-an-kem-voi-gi-banh-gio-bao-nhieu-calo-1-1200x676.jpg ',
         'https://giochaatoan.vn/thumbs/1000x0x1/upload/product/banh-gio-9482.jpg ',
         'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/12/15/1280577/Banh-Gio-2.jpg ',
      ],
      rangePrice: [20000, 35000],
      address: '55/24B Phan Dinh Phung Street, Ward 17, Phu Nhuan District',
      coordinates: [10.792978981499694, 106.6846782684845],
      description:
         "Banh Gio is an extremely famous dish in Vietnam, especially in Hanoi. Banh Gio is made very simply with the outer layer being made of rice flour along with a filling of minced pork, wood ear mushrooms, shallots, and pepper. The cake is wrapped in banana leaves and steamed. It is typically enjoyed while still hot because that's when it tastes the best. In some places, Banh Gio is also served with various accompaniments such as pickled vegetables, cucumber, grilled meat, and Vietnamese sausage, making the dish even more appealing. With those aspects, Banh Gio would indeed be an exciting experience for tourists to try.",
   },
   {
      name: 'Bún Thịt Nướng',
      lstImgs: [
         'https://www.hoangbeo.com/wp-content/uploads/z4712117611734_6f7e121bf37455de15e9d739e6a6d4ff.jpg ',
         'https://static.vinwonders.com/production/bun-thit-nuong-hoi-an-banner.jpg ',
         'https://recipes.net/wp-content/uploads/2021/09/bun-thit-nuong-recipe.jpg ',
      ],
      rangePrice: [25000, 35000],
      address: '149 Chan Hung Street, Ward 6, Tan Binh District',
      coordinates: [10.785189046631066, 106.66249456740614],
      description:
         'Bun Thit Nuong is a beloved and popular specialty dish in all three regions of Vietnam. This dish consists of soft vermicelli noodles, combined with grilled meat, pickled vegetables, and various vegetables such as lettuce, cucumber, cilantro, and mint. The grilled meat is typically prepared from seasoned pork and grilled over charcoal or wood, creating a delicious and flavorful aroma. Bun Thit Nuong is often served with sweet and sour fish sauce, finely chopped peanuts, and fresh chili, creating a rich and enjoyable culinary experience. With its distinctive flavor and rich combination, Bun Thit Nuong is one of the favorite dishes commonly found on the dining tables of every Vietnamese household and restaurant.',
   },
   {
      name: 'Bắp Xào',
      lstImgs: [
         'https://cdn.tgdd.vn/2021/08/CookProduct/thumbcn-1200x676-14.jpg ',
         'https://i.vietgiaitri.com/2022/7/4/lam-bap-xao-tep-ngon-com-toi-mieng-cuoi-cung-4be-6524166.jpg ',
         'https://cdn.tgdd.vn/2021/05/CookProduct/S1400849(2)-1200x676.jpg ',
      ],
      rangePrice: [25000, 30000],
      address: '2/24C Cao Thang Street, Ward 2, District 3',
      coordinates: [10.768416590857216, 106.68415210671512],
      description:
         'Bap Xao, a street food dish, is quite famous in Vietnam. Corn kernels, after being boiled until tender, are stir-fried with butter, fried scallions, dried shrimp, shredded pork, and scallions. What sets this dish apart is the sweet taste of the corn kernels combined with the creamy richness of butter and the delicious flavor of dried shrimp, creating a unique taste profile. It can be said that corn stir-fry is a simple yet captivating dish. It offers an enjoyable experience for visitors.',
   },
   {
      name: 'Hủ Tiếu',
      lstImgs: [
         'https://tiki.vn/blog/wp-content/uploads/2023/07/hu-tieu-nam-vang-xuat-xu-o-dau-1024x576.jpg ',
         'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/hu-tieu-kho-hai-san-thumbnail.jpg ',
         'https://i-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg ',
      ],
      rangePrice: [25000, 60000],
      address: '232 Nguyen Thi Thap, Binh Thuan Ward, District 7',
      coordinates: [10.739349638649403, 106.71842805927797],
      description:
         'Hu Tieu Nam Vang is a popular dish in the Southern region of Vietnam, especially in Saigon. A bowl of Hu Tieu Nam Vang typically contains a variety of ingredients and a delicious broth. The distinctive feature of Hu Tieu Nam Vang lies in the intricate process of preparing the broth, which involves simmering pork bones with dried squid and dried shrimp. A bowl of Hu Tieu Nam Vang usually includescription: rice noodles, pork liver, shrimp, minced meat, fresh vegetables, and a flavorful broth. Hu Tieu Nam Vang can be eaten in two ways: by pouring the broth directly onto the noodles or not. Its unique flavor profile makes Hu Tieu Nam Vang a dish that travelers should not miss out on.',
   },
   {
      name: 'Bún Mắm',
      lstImgs: [
         'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/bun-mam-thumbnail.jpg ',
         'https://cdn.tgdd.vn/Files/2019/03/12/1154316/cach-nau-bun-mam-mien-tay-chuan-thom-ngon-don-gian-tai-nha-202112211640380018.jpg ',
         'https://vcdn-dulich.vnecdn.net/2022/12/05/z3934453208939-58407bb3147e758-6693-9770-1670212263.jpg ',
      ],
      rangePrice: [35000, 60000],
      address: 'N44 Hoang Dieu Street, Ward 6, District 4',
      coordinates: [10.760781073351874, 106.6984709085162],
      description:
         "Bun Mam is one of the specialties of the Mekong Delta region in Vietnam. It is cooked using fermented fish sauce made from either Linh fish or Sac fish. This dish is a combination of rice vermicelli noodles, various vegetables such as water lilies, water spinach, bean sprouts, etc., along with a rich variety of ingredients like shrimp, squid, roasted pork,... It is particularly suitable for diners who enjoy bold and intense flavors. And it's precisely this richness in flavor that gives it its uniqueness. Bun Mam is definitely a dish worth experiencing. ",
   },
   {
      name: 'Phá Lấu',
      lstImgs: [
         'https://maisonmando.com/wp-content/uploads/2022/04/pha-lau-la-mon-gi-1.jpg ',
         'https://i.ytimg.com/vi/lKjA0X4yQE4/maxresdefault.jpg ',
         'https://vcdn-dulich.vnecdn.net/2022/02/21/pha-lau-quan-4-01-9529-1645378720.jpg ',
      ],
      rangePrice: [30000, 35000],
      address: '243/30 Ton Dan Street, Ward 15, District 4',
      coordinates: [10.756294342468232, 106.70663636498749],
      description:
         'Pha Lau is a dish originating from China, then imported to Vietnam and became a popular dish in the South, especially in Saigon (Ho Chi Minh City). A traditional pha lau dish typically consists of a broth made from spices such as star anise, cinnamon, cloves, fennel seeds, and some Chinese medicinal herbs. The meat used in pha lau includes tongue, ears, intestines, and pork stomach, simmered until they absorb the flavorful broth. Nowadays, pha lau is not only cooked with pork but also with beef, duck, squid,... to create variations, making the dish more diverse and rich. With its distinctive flavor and diversity in preparation, pha lau is a traditional dish highly regarded in Vietnamese culinary culture. ',
   },
   {
      name: 'Phở Bò',
      lstImgs: [
         'https://tiki.vn/blog/wp-content/uploads/2023/07/thumb-12.jpg',
         'https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg',
         'https://vcdn-vnexpress.vnecdn.net/2021/08/30/7d0e0ac7-7de9-4d3f-91b1-7d33ec-9630-7773-1630296496.jpg',
      ],
      rangePrice: [30000, 60000],
      address: '433 – 435 Ly Thai To Street, Ward 9, District 10',
      coordinates: [10.767816233959016, 106.66875031249872],
      description:
         'Pho is a traditional and iconic dish of Vietnamese cuisine, known worldwide. This dish consists of soft pho noodles, combined with thinly sliced beef, and a flavorful broth made from beef bones, spices such as onions, ginger, star anise, cinnamon, and chili, creating a distinctive and delicious flavor. Pho is often served with fresh herbs like bean sprouts, cilantro, basil, and chili, along with a side of sweet and sour fish sauce and lime, creating a culinary experience that is rich and diverse. In some places, chicken can also be used as a substitute for beef, adding to the variety of the dish. With its distinctive flavor, Pho is not only a delicious dish but also a symbol of Vietnamese culinary culture, providing diners with a rich and impressive culinary experience.',
   },
   {
      name: 'Bún Bò',
      lstImgs: [
         'https://digifood.vn/blog/wp-content/uploads/2021/12/Cach-nau-bun-bo-mien-Bac-6.jpg ',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg/1200px-Bun-Bo-Hue-from-Huong-Giang-2011.jpg ',
         'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg ',
      ],
      rangePrice: [30000, 60000],
      address: '48 Cach Mang Thang Tam, Ward 6, District 3',
      coordinates: [10.774870840236275, 106.69015243704874],
      description: `Bun Bo is an extremely popular dish in Vietnam. A bowl of Bun Bo typically consists of rice vermicelli noodles, beef brisket, and depending on the region, there may be other accompanying dishes as well,... The "soul" of bun Bo lies in its broth. The broth is simmered from beef bones, giving it a rich and sweet flavor. Additionally, a bit of shrimp paste and lemongrass are added to the broth to enhance its aroma. When enjoying this dish, it's common to eat it with water spinach, bean sprouts,... This is a dish that every diner should not miss when visiting VietNam.`,
   },
   {
      name: 'Cháo lòng',
      lstImgs: [
         'https://www.huongnghiepaau.com/wp-content/uploads/2023/09/chao-long.jpg',
         'https://images2.thanhnien.vn/528068263637045248/2023/7/27/ea3c92e679c4aa9af3d5-1690440757104527678092.jpg',
         'https://tiki.vn/blog/wp-content/uploads/2023/10/chao-long-bao-nhieu-calo-an-nhieu-chao-long-co-tang-can-khong.jpg',
      ],
      rangePrice: [25000, 50000],
      address: '170B Vo Thi Sau Street, Ward 8, District 3',
      coordinates: [10.78625171919009, 106.69026273031811],
      description:
         "Chao Long is one of the famous traditional dishes in the essence of Vietnamese cuisine. This dish is cooked by combining rice with broth made from pork bones and intestines, creating a rich and nutritious flavor. Typically served with blood pudding, pork intestines, and various aromatic herbs, Chao Long is an enticing dish with a rich and fragrant taste of white pepper. It's a dish that travelers cannot miss when visiting Vietnam.",
   },
   {
      name: 'Cao Lầu',
      lstImgs: [
         'https://cdn.tgdd.vn/2021/12/CookDish/cao-lau-la-gi-nguon-goc-cao-lau-cao-lau-va-mi-quang-khac-nhau-avt-1200x676.jpg ',
         'https://static.vinwonders.com/2022/10/cao-lau-hoi-an-banner.jpg ',
         'https://i-giadinh.vnecdn.net/2023/03/13/Buoc-7-Thanh-pham-1-7-9577-1678700377.jpg ',
      ],
      rangePrice: [25000, 40000],
      address: '457/1 Cach Mang Thang 8 Street, Ward 13, District 10',
      coordinates: [10.781335257721837, 106.67447110542767],
      description:
         'Cao Lau is a Vietnamese dish famous in the Central region. Cao Lau features yellow-colored noodles served with a small amount of broth (simmered from pork bones), topped with slices of char siu pork, shrimp, pork, and accompanied by various fresh herbs and crispy fried (or grilled) rice crackers, creating a unique and enticing culinary experience in Vietnamese cuisine culture. This is a dish worth trying when visiting Vietnam.',
   },
   {
      name: 'Mì Quảng',
      lstImgs: [
         'https://cdn.tgdd.vn/2021/02/CookProduct/1200-1200x676-16.jpg ',
         'https://nhuminhplazahotel.com/wp-content/uploads/2023/06/cach-nau-mi-quang-ga-ngon-1.jpg ',
         'https://mia.vn/media/uploads/blog-du-lich/mi-quang-da-nang-mon-an-tru-danh-chua-thu-xem-nhu-chua-den-da-nang-03-1636965593.jpeg ',
      ],
      rangePrice: [35000, 60000],
      address: '161/22 Ba Van Street, Ward 14, Tan Binh District',
      coordinates: [10.796002264118258, 106.63908040719426],
      description:
         'Mi Quang is one of the delicious specialties of Central Vietnam. Mi Quang is a combination of noodles made from finely ground rice flour mixed with eggs, along with other ingredients such as pork or snakehead fish, chicken, shrimp, frog, boiled quail eggs, and a broth made from simmered pork bones. Beneath the noodles are various raw vegetables such as basil, bean sprouts, cilantro, fresh lettuce, young mustard greens, coriander, finely chopped spring onions, and thinly sliced banana flowers. Additionally, Mi Quang is served with sesame rice crackers and crispy roasted peanuts, adding a distinctive flavor to this dish from Quang region. This is a dish that travelers should not miss when visiting Vietnam.',
   },
   {
      name: 'Bún Chả',
      lstImgs: [
         'https://vcdn-vnexpress.vnecdn.net/2021/08/13/f09c9635-f2fc-4d3f-88ca-f933aa-8187-6754-1628833865.jpg ',
         'https://tiki.vn/blog/wp-content/uploads/2023/10/bun-cha-scaled.jpeg ',
         'https://images.foody.vn/res/g77/768243/prof/s/file_restaurant_photo_7iby_16198-52fad3d5-210501102923.jpeg ',
      ],
      rangePrice: [35000, 60000],
      address: '135 Vo Van Tan Street, Ward 6, District 3',
      coordinates: [10.775073731007913, 106.68911762454943],
      description:
         'Bun Cha is an extremely famous dish in northern Vietnam. Bun Cha consists of three main components: the dipping sauce, grilled pork patties, and rice vermicelli noodles. The dipping sauce for Bun Cha is perfectly balanced with sour, spicy, salty, and sweet flavors, typically made with fish sauce, vinegar, sugar, garlic, and chili, and often includes green papaya and carrots. The grilled pork patties come in two forms: flat patties and meatballs, made from pork belly and tender shoulder meat marinated with fish sauce, pepper, and dried shallots. Additionally, this dish is usually served with a variety of herbs such as lettuce, perilla, basil, coriander, mint, and sawtooth herb. Overall, Bun Cha showcases the diversity and richness of Vietnamese cuisine and is an experience not to be missed when visiting Vietnam.',
   },
];
module.exports = foods;
