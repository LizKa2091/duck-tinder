import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FeedPage } from "@pages/FeedPage/ui";
import { MatchesPage } from "@pages/MatchesPage/ui";
import { DialoguePage } from "@pages/DialoguePage/ui";
import { MessagesPage } from "@pages/MessagesPage/ui";
import Layout from "./layout/Layout";

import '@shared/styles/global.scss';

const App: FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<FeedPage />} />
               <Route path='/matches' element={<MatchesPage />} />
               <Route path='/dialogue' element={<DialoguePage />} />
               <Route path='/dialogue/:id' element={<MessagesPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App;