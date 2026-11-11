# ShareShelf



**Course:** Electronic Business Development (BINF 503) · Winter 2026
**Instructor:** Dr. Nourhan Hamdi
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa, Ms. Mariam Khalid, Mr. Younes Zied, Mr. Mahmoud Hani

## 1. Team



| Name | Student ID | Tutorial group | GitHub username |
|---|---|---|---|
| Jumana Hatem | 16001457 | T1 | jumanahatem |
| Reem Elsherbiny | 16009072 | T8 | reemelsherbiny |
| Maya Maged | 16001120 | T8 | mayamagedr |
| Julia Bassem | 16001758 | T8 | juliaa7777 |
| Hana El Komy | 16001496 | T1 | elkomyhana144-create |
| Salma El Gedawy | 16004742 | T1 | Salmagedawysg-oss |

## 2. The idea


ShareShelf is a community-based item-sharing web application that connects individuals who want to lend items with people who need to borrow them temporarily. The platform addresses the problem of unnecessary purchases of items that are only occasionally needed, such as drills, ladders, books, and sports equipment. Users can list items they are willing to share, browse available items, submit borrowing requests, and manage lending and returning activities. ShareShelf aims to encourage resource sharing, reduce unnecessary spending, and promote a more sustainable and collaborative community.

## 3. Features

### 3.1 The full product


1. **User Registration and Login:** Allow users to create accounts, log in, and manage their profiles.
2. **Item Listings:** Allow users to list items they are willing to lend, including descriptions, categories, images, and availability.
3. **Item Browsing and Searching:** Allow users to browse available items and search or filter them by name and category.
4. **Borrowing Requests:** Allow users to request items for specific borrowing periods.
5. **Request Management:** Allow item owners to accept or reject borrowing requests.
6. **Listing Management:** Allow owners to edit or delete their existing item listings.
7. **Borrowing History:** Allow users to view their previous and current borrowing activities.
8. **Item Return Management:** Allow owners to confirm that borrowed items have been returned.
9. **Ratings and Reviews:** Allow users to rate their borrowing experience and review other users.
10. **Notifications:** Notify users about new borrowing requests, approvals, rejections, and return confirmations.
11. **Messaging:** Allow borrowers and owners to communicate about shared items.
12. **Location-Based Search:** Help users find items available within their nearby communities.
13. **Admin Dashboard:** Allow administrators to manage users, listings, and reported content.


### 3.2 The use cases we will build


| # | Use case | What the user does | What they see | What is stored |
|---|---|---|---|---|
| 1 | Registration and login | Registers with name, email and password; logs in with email and password | Their home page, with their name in the header | A User, with the password hashed |
| 2 | Create an item listing | An item owner submits a new listing with the item's name, description, category and availability | A confirmation message and the newly created item in their listings | A new Item document linked to the owner's User ID |
| 3 | Request to borrow an item | A borrower selects an available item, chooses a borrowing period and submits a request | A confirmation message showing that the request is pending | A new BorrowRequest document linked to the item and borrower |
| 4 | Manage borrowing requests | An item owner views incoming requests and accepts or rejects a borrowing request | The updated request status, either approved or rejected | The BorrowRequest document with its updated status |
| 5 | Manage item listings | An item owner edits the details of an existing listing or deletes an item they no longer want to share | The updated item details or a confirmation message that the item was deleted | The updated or deleted Item document |
| 6 | Confirm item return | An item owner confirms that a borrowed item has been returned | A confirmation message showing that the request is completed and the item is available again | The BorrowRequest status updated to returned and the Item availability updated to true |

## 4. Who owns what


| Member | Use case |
|---|---|
| Jumana Hatem | 1. Registration and login |
| Hana El Komy | 2. Create an item listing |
| Reem El Sherbiny | 3. Request to borrow an item |
| Salma El Gedawy | 4. Manage borrowing requests |
| Maya Maged | 5. Manage item listings |
| Julia Bassem | 6. Confirm item return |

## 5. Data model


### User

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // stored hashed, never as plain text
});
```


### Item

```js
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });
```


### BorrowRequest

```js
const borrowRequestSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true
  },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "returned"],
    default: "pending"
  }
}, { timestamps: true });
```


## 6. Run it locally

> Leave this section as it is until Submission 2 (Thursday 10 December 2026,
> 23:59). Then fill it in: we follow these steps to run your project.

### Back end

```bash
cd backend
npm install
# create backend/.env from backend/.env.example (see the table below)
npm start
```

The API runs on http://localhost:3000.

| Variable in `.env` | What it is |
|---|---|
| `MONGODB_URI` | The connection string of your MongoDB Atlas database |
| `JWT_SECRET` | Any long random text, used to sign login tokens |
| [Any other variable] | [What it is] |

### Front end

```bash
cd frontend
npm install
npm run dev
```

The app runs on [the address `npm run dev` prints, e.g. http://localhost:5173].
