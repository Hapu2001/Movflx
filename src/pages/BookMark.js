import React, { useEffect, useState } from "react";
import Navbar from "../components/commons/Navbar";
import {} from "../store/store";
import { useSelector } from "react-redux";
import CardFilm from "../components/commons/CardFilm";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../shared/firebase.js";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

export default function BookMark() {
  const navigate = useNavigate();
  const bookmark = useSelector((state) => state.bookmark);
  const [user, loading, error] = useAuthState(auth);
  const [listFilm, setListFilm] = useState([]);
  let checkLength = listFilm.length > 5 ? true : false;

  useEffect(() => {
    const getFilm = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        await setListFilm([...docSnap.data().bookmark]);
      } catch (err) {
        console.error(err);
      }
    };

    if (!user) {
      navigate("/");
    }

    getFilm();
  }, [listFilm, user]);

  return (
    <div
      className={`bg-home_bg02  mt-[87px] ${
        checkLength > 0 ? "h-auto" : "h-screen"
      }  pt-10 pb-10 lg:mt-[63px]  `}
    >
      <Navbar />
      <div className="">
        <div className="flex flex-wrap justify-center ">
          {listFilm.length === 0 ? (
            <div className="text-white text-5xl pt-10">
              Movie list is currently not available
            </div>
          ) : (
            listFilm?.map((item) => {
              return (
                <div className="mb-5 md:basis-1/2" key={item.id}>
                  <CardFilm listFilm={listFilm} item={item} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
