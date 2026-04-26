import { useReducer } from "react";
import { PostListContext } from "./post-list-context";

const initialPosts = [
  {
    id: 1,
    title: "Mountain Adventure",
    text: "Just returned from an incredible hiking trip to the Himalayas. The views were breathtaking!",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Delicious Homemade Pizza",
    text: "Tried making pizza from scratch today. Turned out better than expected!",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Coffee Break",
    text: "Morning coffee at my favorite cafe. Perfect way to start the day.",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Sunset at the Beach",
    text: "Nothing beats watching the sunset by the ocean. Nature's masterpiece!",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Coding Setup",
    text: "Finally organized my workspace. Ready for some productive coding sessions!",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Street Art Discovery",
    text: "Found this amazing mural in the city today. Love discovering urban art!",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1672097247804-add051dcd682?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Fitness Journey",
    text: "Hit a new personal record at the gym today! Consistency is key to progress.",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Book Recommendations",
    text: "Just finished an amazing thriller. Can't wait to share my thoughts!",
    imageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    title: "Tropical Paradise",
    text: "Vacation mode activated! This island is pure heaven on earth.",
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    title: "Rainy Day Vibes",
    text: "There's something peaceful about watching the rain from my window with a warm cup of tea.",
    imageUrl:
      "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    title: "Gaming Night",
    text: "Epic gaming session with friends! Call of Duty never gets old.",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    title: "Sushi Time",
    text: "Treating myself to some fresh sushi tonight. Pure culinary art!",
    imageUrl:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
  },
  {
    id: 13,
    title: "City Lights",
    text: "The city skyline at night never fails to amaze me. Urban beauty at its finest.",
    imageUrl:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop",
  },
  {
    id: 14,
    title: "Cute Puppy Alert",
    text: "Meet my new best friend! He's already stolen my heart.",
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
  },
  {
    id: 15,
    title: "Road Trip Adventure",
    text: "No destination, just driving and enjoying the journey. Freedom feels good!",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop",
  },
  {
    id: 16,
    title: "Plant Parent Life",
    text: "My indoor jungle is growing! Nothing beats having greenery at home.",
    imageUrl:
      "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=400&h=400&fit=crop",
  },
  {
    id: 17,
    title: "Concert Vibes",
    text: "Live music hits different! What an incredible night.",
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop",
  },
  {
    id: 18,
    title: "Winter Wonderland",
    text: "First snowfall of the season! Time to build a snowman.",
    imageUrl:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=400&fit=crop",
  },
];

const postListReducer = (currentPosts, action) => {
  if (action.type === "ADD_POST") {
    return [action.payload, ...currentPosts];
  }
  if (action.type === "DELETE_POST") {
    return currentPosts.filter((post) => post.id !== action.payload);
  }
  return currentPosts;
};

const PostListProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postListReducer, initialPosts);

  const addPost = (newPost) => {
    dispatchPosts({
      type: "ADD_POST",
      payload: newPost,
    });
  };
  const deletePost = (postId) => {
    dispatchPosts({
      type: "DELETE_POST",
      payload: postId,
    });
  };

  return (
    <PostListContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
