// ======================================================
// OCTOBER 17 — UI VIEW MODEL BUILDER
// REQUIREMENT 1 — Build One User View Model
// ======================================================

type User = {
  id: number;
  name: string;
  isOnline: boolean;
  unreadCount: number;
  nickname?: string | null;
  isSuspended: boolean;
};

type UserViewModel = {
  id: number;
  name: string;
  statusLabel: string;
  displayName: string;
  notificationLabel: string;
  warningMessage: string | false;
};

const users: User[] = [
  {
    id: 101,
    name: "Alex",
    isOnline: true,
    unreadCount: 3,
    nickname: "AJ",
    isSuspended: false,
  },
  {
    id: 102,
    name: "Priya",
    isOnline: false,
    unreadCount: 0,
    nickname: "",
    isSuspended: true,
  },
  {
    id: 103,
    name: "Sam",
    isOnline: true,
    unreadCount: 0,
    nickname: null,
    isSuspended: false,
  },
];

// ======================================================
// REQUIREMENTS
// ======================================================
//
// 1. Accept one User object.
//
// 2. Return one UserViewModel object.
//
// 3. id and name:
//    Preserve the original values.
//    Use object property shorthand in the returned object.
//
// 4. statusLabel:
//    "Online" when isOnline is true.
//    "Offline" otherwise.
//
// 5. displayName:
//    Use nickname when it is not empty or missing.
//    Otherwise use name.
//
// 6. notificationLabel:
//    When unreadCount > 0:
//      "<count> unread messages"
//    Otherwise:
//      "No unread messages"
//
// 7. warningMessage:
//    When isSuspended is true:
//      "Account suspended"
//    Otherwise:
//      false
//
// ======================================================
// EXPECTED RESULTS
// ======================================================
//
// buildUserViewModel(users[0])
//
// {
//   id: 101,
//   name: "Alex",
//   statusLabel: "Online",
//   displayName: "AJ",
//   notificationLabel: "3 unread messages",
//   warningMessage: false
// }
//
// buildUserViewModel(users[1])
//
// {
//   id: 102,
//   name: "Priya",
//   statusLabel: "Offline",
//   displayName: "Priya",
//   notificationLabel: "No unread messages",
//   warningMessage: "Account suspended"
// }
//
// buildUserViewModel(users[2])
//
// {
//   id: 103,
//   name: "Sam",
//   statusLabel: "Online",
//   displayName: "Sam",
//   notificationLabel: "No unread messages",
//   warningMessage: false
// }

//   {
//     id: 103,
//     name: "Sam",
//     isOnline: true,
//     unreadCount: 0,
//     nickname: null,
//     isSuspended: false,
//   },

// ======================================================
// YOUR IMPLEMENTATION
// ======================================================

function buildUserViewModel(user: User): UserViewModel {
  const id = user.id;
  const name = user.name;
  return {
    id,
    name,
    statusLabel: user.isOnline ? "Online" : "Offline",
    displayName: user.nickname ? user.nickname : user.name,
    notificationLabel:
      user.unreadCount > 0
        ? user.unreadCount + " " + "unread messages"
        : "No unread messages",
    warningMessage: user.isSuspended ? "Account suspended" : false,
  };
}

// Tests (uncomment after implementation):
// console.log(buildUserViewModel(users[0]));
// console.log(buildUserViewModel(users[1]));
// console.log(buildUserViewModel(users[2]));

// ======================================================
// REQUIREMENT 2 — Build View Models for All Users
// ======================================================
//
// Requirements:
// 1. Accept an array of User objects.
// 2. Convert every User into a UserViewModel.
// 3. Reuse your existing buildUserViewModel() function.
// 4. Return an array of UserViewModel objects.
// 5. Do not modify the original users array.
//
// Expected output:
//
// [
//   {
//     id: 101,
//     name: "Alex",
//     statusLabel: "Online",
//     displayName: "AJ",
//     notificationLabel: "3 unread messages",
//     warningMessage: false
//   },
//   {
//     id: 102,
//     name: "Priya",
//     statusLabel: "Offline",
//     displayName: "Priya",
//     notificationLabel: "No unread messages",
//     warningMessage: "Account suspended"
//   },
//   {
//     id: 103,
//     name: "Sam",
//     statusLabel: "Online",
//     displayName: "Sam",
//     notificationLabel: "No unread messages",
//     warningMessage: false
//   }
// ]

function buildAllUserViewModels(users: User[]): UserViewModel[] {
  const uv: UserViewModel[] = [];
  for (let i = 0; i < users.length; i++) {
    uv.push(buildUserViewModel(users[i]));
  }
  return uv;
}

// Test:
// console.log(buildAllUserViewModels(users));

// ======================================================
// REQUIREMENT 3 — Identify Users Who Need Attention
// ======================================================
//
// Requirements:
// 1. Accept an array of User objects.
// 2. Return users who meet at least ONE condition:
//    - Their account is suspended.
//    - They have more than 0 unread messages.
// 3. Return the original User objects, not UserViewModel.
// 4. Do not modify the original array.
//
// Expected output:
//
// [
//   {
//     id: 101,
//     name: "Alex",
//     isOnline: true,
//     unreadCount: 3,
//     nickname: "AJ",
//     isSuspended: false
//   },
//   {
//     id: 102,
//     name: "Priya",
//     isOnline: false,
//     unreadCount: 0,
//     nickname: "",
//     isSuspended: true
//   }
// ]
//
// User 103 (Sam) should not be included.

function getUsersNeedingAttention(users: User[]): User[] {
  const attentionUsers: User[] = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].unreadCount > 0 || users[i].isSuspended !== false) {
      attentionUsers.push(users[i]);
    }
  }
  return attentionUsers;
}

// Test:
// console.log(getUsersNeedingAttention(users));

// ======================================================
// REQUIREMENT 4 — USER STATUS CARD
// Today's concepts:
// - Property shorthand
// - Ternary operator
// - Short-circuiting (&&, ||)
// ======================================================

type UserStatusCard = {
  id: number;
  name: string;
  availability: string;
  displayName: string;
  suspensionWarning: string | false;
  unreadMessage: string | false;
};

// REQUIREMENTS:
//
// 1. Accept one User object.
//
// 2. Return one UserStatusCard object.
//
// 3. id and name:
//    Use object property shorthand.
//
// 4. availability:
//    If isOnline is true -> "Available"
//    Otherwise -> "Unavailable"
//
// 5. displayName:
//    Use nickname when it is non-empty.
//    Otherwise use name.
//
// 6. suspensionWarning:
//    If isSuspended is true -> "Account suspended"
//    Otherwise -> false
//
// 7. unreadMessage:
//    If unreadCount > 0 -> "You have unread messages"
//    Otherwise -> false
//
// IMPORTANT:
// Practice all three concepts:
// - Property shorthand for id and name
// - Ternary for availability
// - Short-circuiting for suspensionWarning,
//   unreadMessage, and displayName
//
// EXPECTED OUTPUT:
//
// buildUserStatusCard(users[0])
//
// {
//   id: 101,
//   name: "Alex",
//   availability: "Available",
//   displayName: "AJ",
//   suspensionWarning: false,
//   unreadMessage: "You have unread messages"
// }
//
// buildUserStatusCard(users[1])
//
// {
//   id: 102,
//   name: "Priya",
//   availability: "Unavailable",
//   displayName: "Priya",
//   suspensionWarning: "Account suspended",
//   unreadMessage: false
// }
//
// buildUserStatusCard(users[2])
//
// {
//   id: 103,
//   name: "Sam",
//   availability: "Available",
//   displayName: "Sam",
//   suspensionWarning: false,
//   unreadMessage: false
// }

// {
//     id: 101,
//     name: "Alex",
//     isOnline: true,
//     unreadCount: 3,
//     nickname: "AJ",
//     isSuspended: false,
//   },

function buildUserStatusCard(user: User): UserStatusCard {
  const id = user.id;
  const name = user.name;
  return {
    id,
    name,
    availability: user.isOnline ? "Available" : "Unavailable",
    displayName: user.nickname || user.name,
    suspensionWarning: user.isSuspended && "Account suspended",
    unreadMessage: user.unreadCount > 0 ? "You have unread messages" : false,
  };
}

// TEST:
// console.log(buildUserStatusCard(users[0]));
// console.log(buildUserStatusCard(users[1]));
// console.log(buildUserStatusCard(users[2]));

// ======================================================
// REQUIREMENT 5 — NOTIFICATION DASHBOARD
// ======================================================

type NotificationDashboard = {
  totalUsers: number;
  usersWithUnreadMessages: number;
  totalUnreadMessages: number;
  hasSuspendedUsers: boolean;
  dashboardStatus: string;
  priorityUser: string;
  suspensionAlert: string | false;
};

// REQUIREMENTS:
//
// Create:
// buildNotificationDashboard(users: User[]): NotificationDashboard
//
// 1. totalUsers
//    Total number of users.
//
// 2. usersWithUnreadMessages
//    Count users whose unreadCount > 0.
//
// 3. totalUnreadMessages
//    Sum unreadCount across all users.
//
// 4. hasSuspendedUsers
//    true if at least one user is suspended.
//    Otherwise false.
//
// 5. dashboardStatus
//    "Attention Needed" if:
//      - At least one user is suspended OR
//      - Total unread messages > 0
//    Otherwise "All Clear".
//
//    Practice: ternary operator.
//
// 6. priorityUser
//    Find the FIRST user with unread messages.
//    Use their nickname if it is non-empty.
//    Otherwise use their name.
//
//    If nobody has unread messages, return "None".
//
//    Practice: || short-circuiting.
//
// 7. suspensionAlert
//    "Suspended accounts found" if at least one
//    user is suspended.
//    Otherwise false.
//
//    Practice: && short-circuiting.
//
// 8. Use property shorthand for at least these
//    returned properties:
//      totalUsers
//      usersWithUnreadMessages
//      totalUnreadMessages
//      hasSuspendedUsers
//
// IMPORTANT:
// - Do not modify the original users array.
// - Return ONE NotificationDashboard object.
// - Use today's concepts in your solution.
// - You may use previously learned loops and conditions.

// EXPECTED OUTPUT with the existing users array:
//
// {
//   totalUsers: 3,
//   usersWithUnreadMessages: 1,
//   totalUnreadMessages: 3,
//   hasSuspendedUsers: true,
//   dashboardStatus: "Attention Needed",
//   priorityUser: "AJ",
//   suspensionAlert: "Suspended accounts found"
// }

function buildNotificationDashboard(
  users: User[]
): NotificationDashboard {

    let usersWithUnreadMessages=users.filter(u=>u.unreadCount>0)
    let totalUnreadMessages=0
     for(let i=0;i<usersWithUnreadMessages.length;i++)
     {
       totalUnreadMessages=totalUnreadMessages+usersWithUnreadMessages[i].unreadCount
     }
   let hasSuspendedUser=users.filter(u=>u.isSuspended!==false)
   let dashboardStats=users.filter(u=>u.isSuspended!==false||u.unreadCount>0)
   let firstUser =users.find(u=>u.unreadCount>0)
  return{
    totalUsers:users.length,
    usersWithUnreadMessages:usersWithUnreadMessages.length,
    totalUnreadMessages:totalUnreadMessages,
    hasSuspendedUsers:hasSuspendedUser.length>0 && true,
    dashboardStatus:dashboardStats.length>0?"Attention Needed":"All Clear",
    priorityUser:(firstUser?.nickname?? firstUser?.name)||"None",
    suspensionAlert:hasSuspendedUser.length>0 &&"Suspended accounts found"

  }
}

// TEST:
// console.log(buildNotificationDashboard(users));