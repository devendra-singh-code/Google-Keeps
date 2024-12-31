import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, useToast } from "react-toastify";

export const NotesContext = createContext({
  notes: [],
  user: [],
  addNote: () => {},
  deleteNote: () => {},
});

export const useNote = () => {
  return useContext(NotesContext);
};

const NotesProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState([]);
  const [listView, setListView] = useState(false);
  const navigate = useNavigate();
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [userSession, setUserSession] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectSidebar, setSelectSidebar] = useState("home")
  const [color, setColor] = useState("#b4ddd3");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [showtoast, setShowToast] = useState(null);
  const [errortoast, setErrorToast] = useState(null);

  const [trash, setTrash] = useState([
    {
      title: "trash",
      textarea: "this is a trash folder",
    },
  ]);

  useEffect(() => {
    toast(showtoast, { position: "top-center", theme: "dark" });
  }, [showtoast]);

  useEffect(() => {
    toast.error(errortoast, { position: "top-center", theme: "dark"  });
  }, [errortoast]);

  const userLoggedIn = user.filter((user) => user.email === userSession);

  const addUser = (users) => {
    const email = user.filter((user) => user.email === users.email);

    if (email.length === 0) {
      setShowToast("User Added");
      setUser((prev) => [{ ...users }, ...prev]);
      navigate("/");
    } else if (email.length !== 0) {
      setErrorToast("Email already exist");
      console.log("user exist");
    }
  };

  const userLogin = (data) => {
    const userLogged = user.filter((user) => user.email === data.email);

    if (userLogged) {
      user.map((user) => {
        if (userLogged.length === 0) {
          setErrorToast("Email not Exist");
        } else if (
          user.email === data.email &&
          user.password === data.password
        ) {
          setUserSession(user.email);
          sessionStorage.setItem("loginUser", user.email);
          navigate("home");
          setShowToast(`Welcome ${user.name}`);
        } else {
          setErrorToast("email and password not matched");
        }
      });
    }
  };

  const addNote = (title, textarea, id, colorCard, email, type = "home") => {
    if(title !== "" && textarea !== ""){
      setNotes((prev) => [
        { title, textarea, id, colorCard, email, type },
        ...prev,
      ]);
      setShowToast("note added")
    }else if(title === "" && textarea === ""){
      setErrorToast("please fill title and note field")
    }
  };

  const deleteNote = (id, email, type) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, type: "delete" } : note))
    );
  };
  const archiveNote = (id, email, type) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, type: "archive" } : note))
    );
  };

  const premanentDelete = (id) => {
    const deleteNote = notes.filter((card) => card.id !== id);
    setNotes(deleteNote);
  };

  const changeColor = (id, card) => {
    setNotes((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? card : prevTodo))
    );
  };

  useEffect(() => {
    const note = JSON.parse(localStorage.getItem("googleKeepNotes"));
    if (note && note.length > 0) {
      setNotes(note);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("googleKeepNotes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("googleKeepUsers"));
    if (user && user.length > 0) {
      setUser(user);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("googleKeepUsers", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("loginUser");
    if (savedUser) {
      setUserSession(savedUser);
    } else {
      console.log("please login");
    }
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        setShowSidebar,
        showSidebar,
        addNote,
        deleteNote,
        trash,
        color,
        changeColor,
        addUser,
        isloggedIn,
        setIsLoggedIn,
        userLogin,
        userSession,
        userLoggedIn,
        setIsDarkMode,
        isDarkMode,
        premanentDelete,
        listView,
        setListView,
        selectSidebar, setSelectSidebar, archiveNote, setShowToast,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
