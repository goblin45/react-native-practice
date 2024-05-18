import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.rajarshi.aora',
    projectId: '663b2e980000fff65072',
    databaseId: '663b3341002512467cef',
    userCollectionId: '663b336200327cddba5f',
    videoCollectionId: '663b337a003068acdc69',
    storageId: '663b362c0028e1a95527'
} 

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId
} = config

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            username
        );
        if (!newAccount) throw Error
        
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            } 
        )

        return newUser
    } catch (err) {
        console.log(err)
        throw new Error(err) 
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        if (!currentAccount) throw Error

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [
                Query.equal('accountId', currentAccount.$id)
            ] 
        )

        if (!currentUser) throw Error

        return currentUser.documents[0]
    } catch (err) {
        console.log(err) 
        throw new Error(err)
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
        )
        return posts.documents
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}