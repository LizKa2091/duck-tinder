import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@shared/store/store'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@shared/api/queryClient'

import App from '@app/App'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <Provider store={store}>
            <App />
         </Provider>
      </QueryClientProvider>
   </StrictMode>,
)