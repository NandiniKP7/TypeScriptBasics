
// October 16 — Nullish Coalescing (??)
// Exercise 1: Preference Defaults

type Preferences = {
  userId: number;
  displayName?: string | null;
  volume?: number | null;
  notifications?: boolean | null;
  layout?: {
    theme?: string | null;
    itemsPerPage?: number | null;
  } | null;
};

type ResolvedPreferences = {
  userId: number;
  displayName: string;
  volume: number;
  notifications: boolean;
  theme: string;
  itemsPerPage: number;
};

const preferences: Preferences[] = [
  {
    userId: 1,
    displayName: "Ava",
    volume: 0,
    notifications: false,
    layout: {
      theme: "",
      itemsPerPage: 0
    }
  },
  {
    userId: 2,
    displayName: null,
    volume: null,
    notifications: undefined,
    layout: null
  },
  {
    userId: 3,
    displayName: "",
    volume: 75,
    notifications: true,
    layout: {
      theme: "dark",
      itemsPerPage: 10
    }
  }
];

// ======================================================
// REQUIREMENT 1 — Resolve User Preferences
// ======================================================
//
// Implement resolvePreferences().
//
// Default values:
// displayName  -> "Guest"
// volume       -> 50
// notifications -> true
// theme        -> "light"
// itemsPerPage -> 20
//
// Preserve valid values: 0, false, "".
//
// Expected result for preferences[0]:
// {
//   userId: 1,
//   displayName: "Ava",
//   volume: 0,
//   notifications: false,
//   theme: "",
//   itemsPerPage: 0
// }
//
// Expected result for preferences[1]:
// {
//   userId: 2,
//   displayName: "Guest",
//   volume: 50,
//   notifications: true,
//   theme: "light",
//   itemsPerPage: 20
// }
//
// Expected result for preferences[2]:
// {
//   userId: 3,
//   displayName: "",
//   volume: 75,
//   notifications: true,
//   theme: "dark",
//   itemsPerPage: 10
// }

function getResolvePreferences(
  preference: Preferences
): ResolvedPreferences {
    return {
        userId:preference.userId,
        displayName:preference.displayName?? "Guest",
        volume:preference.volume?? 50,
        notifications:preference.notifications?? true,
        theme:preference.layout?.theme??"light",
        itemsPerPage:preference.layout?.itemsPerPage??20

    };
}


// Test after implementation:
// console.log(resolvePreferences(preferences[0]));
// console.log(resolvePreferences(preferences[1]));
// console.log(resolvePreferences(preferences[2]));

// ======================================================
// REQUIREMENT 2 — Resolve All User Preferences
// ======================================================
//
// Requirements:
// 1. Accept an array of Preferences.
// 2. Resolve every user's preferences using Requirement 1.
// 3. Return an array of ResolvedPreferences.
// 4. Do not modify the original preferences array.
//
// Expected result:
//
// [
//   {
//     userId: 1,
//     displayName: "Ava",
//     volume: 0,
//     notifications: false,
//     theme: "",
//     itemsPerPage: 0
//   },
//   {
//     userId: 2,
//     displayName: "Guest",
//     volume: 50,
//     notifications: true,
//     theme: "light",
//     itemsPerPage: 20
//   },
//   {
//     userId: 3,
//     displayName: "",
//     volume: 75,
//     notifications: true,
//     theme: "dark",
//     itemsPerPage: 10
//   }
// ]

function getResolveAllPreferences(
  preferences: Preferences[]
): ResolvedPreferences[] {
  const rp:ResolvedPreferences[]=[]
  for( let i=0;i<preferences.length; i++)
  {
   rp.push(getResolvePreferences(preferences[i]))
  }
  return rp
}

// Test:
// console.log(resolveAllPreferences(preferences));

// ======================================================
// REQUIREMENT 3 — Find Users with Missing Preferences
// ======================================================
//
// Requirements:
// 1. Accept an array of Preferences.
// 2. Return users whose volume OR notifications are
//    null or undefined.
// 3. Preserve valid values such as 0 and false.
// 4. Return the original Preferences objects.
//
// Expected result for the supplied data:
// [
//   {
//     userId: 2,
//     displayName: null,
//     volume: null,
//     notifications: undefined,
//     layout: null
//   }
// ]
//
// IMPORTANT:
// The function returns Preferences[], not number[].
// The expected result contains complete objects,
// not just user IDs.

function getUsersWithMissingPreferences(
  preferences: Preferences[]
): Preferences[] {
   const pf:Preferences[]=[]
    for(let i=0; i<preferences.length;i++)
    {
      if(preferences[i].volume===undefined || preferences[i].volume===null || preferences[i].notifications===undefined || preferences[i].notifications===null)
      {
       
            pf.push(preferences[i])
        }
      
    }
    return pf
}

// Test:
// console.log(getUsersWithMissingPreferences(preferences));

// ======================================================
// REQUIREMENT 4 — Compare ?? and ||
// ======================================================
//
// Requirements:
// 1. Accept an array of Preferences.
// 2. For each user, compare the volume default
//    produced by ?? with the default produced by ||.
// 3. Use 50 as the default volume.
// 4. Return one comparison object per user.
//
// Expected output:
//
// [
//   { userId: 1, nullishVolume: 0, orVolume: 50 },
//   { userId: 2, nullishVolume: 50, orVolume: 50 },
//   { userId: 3, nullishVolume: 75, orVolume: 75 }
// ]
//
// Return complete comparison objects, not just values.

type VolumeComparison = {
  userId: number;
  nullishVolume: number;
  orVolume: number;
};

function voulume(preferences:Preferences):VolumeComparison
{
    return{
        userId:preferences.userId,
        nullishVolume:preferences.volume?? 50,
        orVolume:preferences.volume ||50

    }
}
function compareVolumeDefaults(
  preferences: Preferences[]
): VolumeComparison[] {
    const vc:VolumeComparison[]=[]
  for(let i=0;i<preferences.length;i++)
  {
    vc.push(voulume(preferences[i]))
  }
  return vc
}

// Test:
// console.log(compareVolumeDefaults(preferences));


// ======================================================
// REQUIREMENT 5 — Preference Summary Report
// ======================================================
//
// Requirements:
// 1. Accept an array of Preferences.
// 2. Resolve each user's preferences using your
//    existing resolvePreferences() function.
// 3. Return a summary containing:
//    - totalUsers: total number of users
//    - notificationsEnabled: users with notifications true
//    - mutedUsers: users with volume 0
//    - darkThemeUsers: users with theme "dark"
// 4. Use resolved values when calculating the summary.
//
// Expected output:
//
// {
//   totalUsers: 3,
//   notificationsEnabled: 2,
//   mutedUsers: 1,
//   darkThemeUsers: 1
// }

type PreferenceSummary = {
  totalUsers: number;
  notificationsEnabled: number;
  mutedUsers: number;
  darkThemeUsers: number;
};

function getPreferenceSummary(
  preferences: Preferences[]
): PreferenceSummary {
    let resolveAllPreference:ResolvedPreferences[]=[]
  for(let i=0;i<preferences.length;i++)
  {
   resolveAllPreference.push(getResolvePreferences(preferences[i]))
  }
  let notifications = resolveAllPreference.filter(n=>n.notifications===true)
  let mutedUsers=resolveAllPreference.filter(m=>m.volume===0)
  let darkThemeUsers= resolveAllPreference.filter(dt=>dt.theme==="dark")
  return{
    totalUsers:resolveAllPreference.length,
    notificationsEnabled:notifications.length,
    mutedUsers:mutedUsers.length,
    darkThemeUsers:darkThemeUsers.length
  }
}

// Test:
// console.log(getPreferenceSummary(preferences));