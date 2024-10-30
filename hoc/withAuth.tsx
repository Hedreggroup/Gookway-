"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"; // or your auth provider
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useLocalStorage<any>("user-token", "");
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
      if (!token) {
        // router.replace(`/login?returnUrl=${router.asPath}`);
        router.push(`/user/login?returnUrl=${encodeURIComponent(pathName)}`);
      } else {
        setIsLoading(false);
      }
    }, [token, pathName]);

    if (isLoading) {
      return <Loader />; // Or a loading spinner if desired
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
