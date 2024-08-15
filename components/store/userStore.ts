import { create } from "zustand";

interface IGlobalStore {
    token: string
    setToken: (token:string)=> void
} 

export const useGlobalStore = create<IGlobalStore>((set)=> ({
    token:"",
    setToken:(token:any)=> set({token})
}))