/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

interface TestDataContextValue {
  id: string;
  name?: string;
}

interface TestDataContext {
  testData: TestDataContextValue[];
  loading: boolean;
  error: string | null;
}

const TestDataContext = createContext<TestDataContext | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const FetchFirebaseDataProvider = ({ children }: ProviderProps) => {
  const [testData, setTestData] = useState<TestDataContextValue[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "test"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestData(data);
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      setError("Error fetching data from Firebase");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue: TestDataContext = {
    testData,
    loading,
    error,
  };

  return (
    <TestDataContext.Provider value={contextValue}>
      {children}
    </TestDataContext.Provider>
  );
};
export const useTestData = () => {
  const context = useContext(TestDataContext);
  if (!context) {
    throw new Error("useTestData must be used within a TestDataProvider");
  }
  return context;
};
