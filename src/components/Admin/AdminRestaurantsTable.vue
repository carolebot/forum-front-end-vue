<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link :to="{name:'admin-restaurant-edit', params:{id: restaurant.id}}" class="btn btn-link">Edit</router-link>

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Lowell Donnelly",
      tel: "(447) 219-0008 x041",
      address: "191 Giuseppe Cape",
      opening_hours: "08:00",
      description: "Dolorem aspernatur dicta odio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.3823766226384295",
      viewCounts: 2,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-11T05:56:57.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 2,
      name: "Geovanni Denesik",
      tel: "1-185-300-4867 x1701",
      address: "789 Lesch Fork",
      opening_hours: "08:00",
      description: "Earum alias ipsam beatae eos numquam sit et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.112703343908969",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 3,
      name: "Neoma Murphy",
      tel: "916-384-2514 x6215",
      address: "169 Pearlie Village",
      opening_hours: "08:00",
      description: "Eos dolor error.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.157321266980052",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 4,
      name: "Christy Hills",
      tel: "513-540-6969",
      address: "784 Volkman Valleys",
      opening_hours: "08:00",
      description:
        "Voluptas cupiditate dicta corporis.\nVoluptas dolorum ut quia omnis illo.\nQui nihil tempora minus et mollitia.\nAliquid cumque autem minus fuga aliquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.818346847179406",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 5,
      name: "Deondre Bayer",
      tel: "1-696-075-8048",
      address: "1406 Linwood Shore",
      opening_hours: "08:00",
      description:
        "Harum vel quo tempore dolorem dolorum architecto vero est et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.355308889584052",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 6,
      name: "Cortney West",
      tel: "(648) 332-0960 x3897",
      address: "859 Connie Walks",
      opening_hours: "08:00",
      description:
        "Amet rerum nisi sit odit vitae saepe quaerat. Earum sed quia molestiae dolores harum id sint doloremque mollitia. Iure minus quas reiciendis velit et deserunt in a est. Libero totam ut. Hic et esse mollitia dolores laborum.\n \rConsequatur nulla dolores. Quia sapiente consequatur laboriosam et suscipit autem. Quis nihil consequuntur itaque alias in.\n \rConsequatur porro qui tempore et possimus accusamus ex. Vitae alias soluta quia delectus veritatis sit. Aut reprehenderit et ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.68127017169309",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 7,
      name: "Jodie Waelchi",
      tel: "1-788-988-6803",
      address: "9362 Yundt Valley",
      opening_hours: "08:00",
      description:
        "Quibusdam voluptatem numquam. Mollitia quia vel ut. Molestiae nesciunt natus quia est. Aperiam nihil vel eligendi et deleniti harum molestiae. Dolorem ipsam numquam tenetur dolor qui sit omnis eius. Laboriosam nam velit laboriosam qui quibusdam error enim voluptatem ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.57687105492722",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 8,
      name: "Kale Osinski",
      tel: "539-265-9548 x7040",
      address: "7046 Schuppe Stravenue",
      opening_hours: "08:00",
      description:
        "Commodi incidunt ut iure sequi. Aperiam nihil facilis sit fugiat omnis. Perferendis et incidunt perferendis modi quod sit facere voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.987657603716368",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 9,
      name: "Aileen Abshire",
      tel: "(137) 428-6356 x6304",
      address: "0070 Chad Ranch",
      opening_hours: "08:00",
      description: "Qui optio praesentium nobis delectus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.257852064370574",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 10,
      name: "Meagan Carter",
      tel: "(369) 855-1510 x3630",
      address: "13614 Considine Trail",
      opening_hours: "08:00",
      description: "Eos ut a eligendi vel recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.77193219899113",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 11,
      name: "Brendan Schulist",
      tel: "(891) 243-3657 x10562",
      address: "69099 Stracke Fields",
      opening_hours: "08:00",
      description:
        "Earum in eos quidem est ea dolores libero est.\nAccusamus fugit esse vel minima exercitationem dolores quis vitae.\nMollitia minus et dolorem vel recusandae tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.342454117521704",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 12,
      name: "Keven O'Kon",
      tel: "731.651.0848 x16947",
      address: "876 Effertz Groves",
      opening_hours: "08:00",
      description:
        "Dolorem sint odio libero eaque voluptatum dolores voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.30958635038118",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 13,
      name: "Bernice Schowalter Jr.",
      tel: "(598) 352-2830",
      address: "6200 Augustus Pines",
      opening_hours: "08:00",
      description: "quis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.73478256441343",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 14,
      name: "Bret Watsica",
      tel: "803.437.6907",
      address: "09883 Demond Expressway",
      opening_hours: "08:00",
      description: "Quis voluptatem consequuntur dolorum aut mollitia sint.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.668395196749543",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 15,
      name: "Jeff Wintheiser",
      tel: "709-749-6490 x2208",
      address: "089 Dereck Point",
      opening_hours: "08:00",
      description: "autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.784871856237016",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 16,
      name: "Rigoberto Eichmann",
      tel: "924-391-7878 x88482",
      address: "872 Wilkinson Via",
      opening_hours: "08:00",
      description:
        "Voluptatibus consequatur asperiores consequuntur illo facilis. Placeat labore similique dolorem quia et. Ut cum enim iure. Ad sunt provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.95582531625502",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 17,
      name: "Brett Hammes MD",
      tel: "(927) 193-0697",
      address: "44320 Farrell Ramp",
      opening_hours: "08:00",
      description: "Odit error ut natus culpa ea sint ex.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.383311051496",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 18,
      name: "Maiya Considine",
      tel: "(130) 512-4617",
      address: "61164 Steuber Forest",
      opening_hours: "08:00",
      description:
        "Eius enim perferendis non sunt molestias blanditiis perferendis aut. Sed veniam totam quam harum enim. Ab quia adipisci voluptas labore. Nisi provident fugit. In molestias velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.17303856507351",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 19,
      name: "Lora Hackett",
      tel: "1-191-545-4843 x01434",
      address: "9935 Boehm Flat",
      opening_hours: "08:00",
      description: "voluptatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.11526612665347",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 20,
      name: "Gwen Mante",
      tel: "(865) 923-9327",
      address: "01628 Hagenes Tunnel",
      opening_hours: "08:00",
      description: "quia inventore magnam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.35473594380211",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 21,
      name: "Alvah Becker",
      tel: "(432) 872-6812 x9395",
      address: "409 Makenzie Trail",
      opening_hours: "08:00",
      description:
        "Eos excepturi fuga libero qui perferendis est sit recusandae. Temporibus rerum dolor voluptates cum ullam dolorem optio. Sit perspiciatis officia. Odit natus vel. Quia pariatur dicta.\n \rCulpa sit quis perferendis nulla sed occaecati. Sunt necessitatibus culpa aut aut soluta et quaerat. Voluptatem qui eaque cumque earum excepturi quasi reiciendis quos.\n \rAutem numquam autem quo voluptatibus fuga explicabo dolorem. Cum praesentium libero. Voluptas voluptatem aut. Tempore labore eius ad vitae. Et neque laudantium eos iusto voluptatem illo qui dolorum. Amet est rem exercitationem autem unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.59015111608784",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 22,
      name: "Ms. Kamren Denesik",
      tel: "1-838-447-9500",
      address: "501 Mckenna Station",
      opening_hours: "08:00",
      description: "sed corrupti molestiae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.17754678503746",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 23,
      name: "Jeff Kling",
      tel: "153-158-2302 x7250",
      address: "16024 Neha Underpass",
      opening_hours: "08:00",
      description:
        "Velit illo eligendi illum. Quia voluptatibus fuga est repellendus quam aspernatur inventore mollitia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.91409415389735",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 24,
      name: "Mark Orn",
      tel: "1-700-482-7819 x0965",
      address: "70018 Carmen Glen",
      opening_hours: "08:00",
      description: "Mollitia aliquam eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.33305400272975",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 25,
      name: "Kathlyn Vandervort",
      tel: "770-768-4578 x50665",
      address: "310 Thora Ferry",
      opening_hours: "08:00",
      description:
        "Rerum ipsam enim sit cum non sint fugiat ipsam nam. Accusamus vel rerum et laboriosam non sed. Natus ut aut. Ut illum id explicabo qui voluptas eligendi non ut.\n \rEarum ab odit quasi. Sunt aperiam ut ipsam est et. Ab rem aperiam et commodi vitae dolorem.\n \rVero eligendi excepturi recusandae. Laborum quia velit dolor. Velit assumenda est non ab mollitia sint reprehenderit. Amet ut quos cum sit minus nam. Voluptas eveniet quis error sit distinctio asperiores molestiae recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.16742033662884",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 26,
      name: "Liana Hoeger",
      tel: "505.868.3509 x007",
      address: "185 Cummerata Vista",
      opening_hours: "08:00",
      description:
        "Ratione autem qui iusto. Labore possimus nam occaecati. Non dolorem esse omnis ea soluta omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.6377257102966",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 27,
      name: "Austen Nienow",
      tel: "555-812-4634",
      address: "3704 Donavon Plain",
      opening_hours: "08:00",
      description:
        "Et sapiente consequatur. Iste et excepturi voluptas quae voluptatibus et enim quisquam. Maiores illum quia fugit id iusto. Laborum omnis quasi omnis sit cum est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.527165000572493",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 28,
      name: "Lawrence Schultz",
      tel: "874.020.4836 x753",
      address: "6404 Isai Turnpike",
      opening_hours: "08:00",
      description: "provident",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.87353896415556",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 29,
      name: "Mrs. Odessa Turcotte",
      tel: "170.763.6330",
      address: "6545 Jameson Lake",
      opening_hours: "08:00",
      description: "nemo voluptatum saepe",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.596064756801",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 30,
      name: "Beverly Koch",
      tel: "1-346-644-3736",
      address: "72027 Kutch Union",
      opening_hours: "08:00",
      description: "aliquam non voluptatem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.10533032546167",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 31,
      name: "Mr. Alexander Turcotte",
      tel: "(406) 190-5330 x32757",
      address: "5971 Darryl Mill",
      opening_hours: "08:00",
      description:
        "Ipsam perspiciatis voluptate ipsa pariatur. Molestias ullam ullam. Aut sunt consequuntur nam. Voluptas quam officia tempore eligendi velit omnis veniam non iure.\n \rDolorem dolorem consequatur molestiae aut quia voluptas. Est incidunt ad praesentium. Est possimus et ducimus aut est soluta deserunt porro.\n \rDeleniti autem omnis magnam aut vel dolores ut blanditiis sunt. Et vel rerum doloremque deserunt provident a commodi. Quidem molestias dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.138654386374974",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 32,
      name: "Ansley Koss",
      tel: "(314) 821-0463 x67582",
      address: "7657 Heather Passage",
      opening_hours: "08:00",
      description:
        "Consequuntur dolores quo officia ab non maxime quo ea est. Ullam ad omnis consequatur fuga dicta sed est est. Doloribus eveniet cupiditate quidem odit distinctio voluptas.\n \rDolor perferendis voluptatibus ratione quaerat et beatae. Culpa distinctio architecto. Aut veritatis quo. Quia sit enim cum placeat. Qui quis dolorem possimus sint. Nihil ratione quidem.\n \rLabore autem odit nemo magnam laboriosam. Et eos quis saepe quibusdam deserunt nesciunt et. Quod qui et ut veritatis qui nihil. Sint itaque mollitia molestiae est dignissimos quia repellendus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.66850753985342",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 33,
      name: "Dr. Stephania Hand",
      tel: "068-676-7117 x35799",
      address: "26080 Raynor Parkways",
      opening_hours: "08:00",
      description:
        "Ut non explicabo excepturi dolore dolor qui nam nihil. Provident cupiditate molestias et et enim ab.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.39586359055218",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 34,
      name: "Darrion Grant I",
      tel: "648.825.5001 x87917",
      address: "2829 Mohr Terrace",
      opening_hours: "08:00",
      description:
        "Alias cum sed excepturi nihil quia officiis necessitatibus. Aut a asperiores perspiciatis dignissimos aliquid quisquam. Sint deserunt similique non omnis. Qui amet hic molestiae architecto aspernatur possimus qui quis culpa. Aut praesentium repudiandae et.\n \rMolestias molestias non sunt hic occaecati illo est quasi. Delectus velit qui mollitia error porro. Et qui saepe omnis. Fugiat quas natus. Sit alias vero enim dicta velit. Quidem et repellat non minima earum ab ipsum rem perferendis.\n \rNam quia nesciunt qui cupiditate laborum modi sunt. Ea amet cumque soluta voluptatem quidem ratione corporis sed omnis. Dicta est officia repellendus quis eligendi ex facere. Porro neque quisquam voluptates explicabo est ex sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.98711415766467",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 35,
      name: "Lamont Fadel",
      tel: "(812) 992-8856",
      address: "247 Russel Gardens",
      opening_hours: "08:00",
      description: "neque sed molestiae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.58297625785787",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 36,
      name: "Maxine Sipes MD",
      tel: "661.214.9019",
      address: "2498 Dickinson Lane",
      opening_hours: "08:00",
      description:
        "Impedit provident et adipisci suscipit autem blanditiis eveniet.\nSint sunt ipsa et.\nVelit sunt enim nemo iste voluptate laboriosam sed non ut.\nQuia molestiae consequatur consequatur perferendis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.05250850806267",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 37,
      name: "Edd Upton",
      tel: "764.028.7412 x233",
      address: "0553 Bechtelar Cove",
      opening_hours: "08:00",
      description:
        "Sapiente vel quam iste excepturi suscipit adipisci a consectetur.\nAssumenda quam rerum inventore nihil iste ab.\nMinima enim libero id eos.\nEx blanditiis cupiditate.\nRepellendus natus ut error doloremque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.328718948741628",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 38,
      name: "Dell Miller",
      tel: "1-990-506-8998",
      address: "472 Ole Pass",
      opening_hours: "08:00",
      description:
        "Nemo vero animi repellat incidunt. Magnam occaecati esse natus aliquam saepe voluptatum sint. Harum illo assumenda voluptas. Sequi aut sapiente amet odit quia et magnam eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.11425493029131",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 39,
      name: "Jennyfer Hermiston",
      tel: "561-721-6592 x0630",
      address: "2783 Jaquelin Station",
      opening_hours: "08:00",
      description:
        "Illo porro vel aut unde in. Recusandae voluptatem ut sed voluptatem ratione. Voluptatem omnis voluptate. Quis aut ipsum totam omnis voluptas repellendus. Numquam error ad enim deserunt. In ab dignissimos dolorem eveniet optio quod repellat voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.31949814666643",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 40,
      name: "Kiera Lind",
      tel: "(336) 190-7519",
      address: "3410 Bashirian Villages",
      opening_hours: "08:00",
      description:
        "Pariatur nobis asperiores distinctio eos quia et tempora.\nUt inventore qui.\nUt aut fugiat non voluptatem in consequatur aperiam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.501471497502735",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 41,
      name: "Gustave Mills",
      tel: "208.443.7443",
      address: "0212 Yundt Islands",
      opening_hours: "08:00",
      description:
        "Fuga incidunt non eum qui necessitatibus autem.\nMinus similique vitae qui tempora excepturi cupiditate rerum.\nFugit qui aliquid inventore ut inventore et nobis in voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.064971321332557",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 42,
      name: "Miss Theodore Emard",
      tel: "113.580.2725 x8959",
      address: "3983 Cali Wells",
      opening_hours: "08:00",
      description: "minima",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.745663085006285",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 43,
      name: "Larry Schuppe I",
      tel: "1-669-239-9989",
      address: "6531 Kuhn Fort",
      opening_hours: "08:00",
      description:
        "Facilis modi similique ea aperiam maiores amet.\nNon voluptatem dignissimos molestiae possimus unde reprehenderit veniam ipsa.\nIn sint nemo omnis atque sed provident.\nMolestiae non vitae minus nulla voluptas.\nRepellendus sint et ea et autem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.23065759908286",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 44,
      name: "Melba Gaylord",
      tel: "080-514-0221 x9019",
      address: "4883 Princess Parks",
      opening_hours: "08:00",
      description: "perferendis et occaecati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.72970999130816",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 45,
      name: "Polly Kohler",
      tel: "1-845-795-0347 x722",
      address: "654 Caitlyn Island",
      opening_hours: "08:00",
      description:
        "In quis quis iste laborum rerum qui non quas. Quia qui magni dolore blanditiis provident cum perspiciatis vel. Minima nihil cupiditate dolor aut hic nulla architecto impedit alias. Amet enim quibusdam maiores architecto a. Dolores explicabo qui quia vero fugiat accusantium in libero et.\n \rNisi et culpa facere dolorum voluptatem aliquid. Reprehenderit sint inventore exercitationem ipsa. Distinctio consectetur sed odit aut aperiam est tempore eveniet. Sed similique est laudantium quo est quaerat. Nihil sint qui et. Velit laborum illum sed tempore totam.\n \rConsectetur voluptates esse facilis. Nemo voluptatem impedit voluptate repudiandae in. Iusto ea aut nobis accusantium eveniet ut qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.02726361621269",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 46,
      name: "Mrs. Jameson Greenholt",
      tel: "801-255-3442 x178",
      address: "4542 Veum Knoll",
      opening_hours: "08:00",
      description:
        "Voluptatem sed ut tenetur aut molestiae exercitationem perferendis. Id ut aut. Praesentium voluptatem culpa tempore velit est. Reprehenderit odio reprehenderit non quos cum impedit doloribus. Quo et voluptate.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.272147544123023",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 47,
      name: "Gunnar Runte",
      tel: "561-754-5806 x0251",
      address: "81946 Alba Forges",
      opening_hours: "08:00",
      description: "a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.97005037712124",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 48,
      name: "Rhianna Frami",
      tel: "216-129-2722",
      address: "4243 Francesca Brook",
      opening_hours: "08:00",
      description:
        "Amet eum nulla necessitatibus praesentium in. Qui qui id ducimus in facilis voluptas porro. Et aut alias. Autem possimus rerum perspiciatis. Sint molestias pariatur animi amet est sit. Rerum esse quibusdam debitis quibusdam quasi consequatur ut impedit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.492591872595625",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 49,
      name: "Florencio Kutch",
      tel: "309-301-0707 x6581",
      address: "93293 Sylvester Shoals",
      opening_hours: "08:00",
      description: "Autem aut perferendis atque voluptatem et id neque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.3251516616679",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
    {
      id: 50,
      name: "Adella Torphy",
      tel: "977.129.7302 x11246",
      address: "70257 Webster Village",
      opening_hours: "08:00",
      description: "laborum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.472595642503535",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter((restaurant) => {
        return restaurant.id !== restaurantId;
      });
    },
  },
};
</script>