import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext("email");

export function AuthContextProvider ({ children }: { children : any}){
    const [user, setUser] = useState();

    function signUp(email: string, password: string){
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'user', email),{
            'savedShows': []
        })
    }

    function logIn(email: string, password: string){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser: any)=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    })

    return (
        <AuthContext.Provider
         //@ts-ignore
         value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth (){
    return useContext(AuthContext);
}