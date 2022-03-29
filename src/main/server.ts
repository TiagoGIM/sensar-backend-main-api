import 'module-alias/register'
import app from '@src/main/config/app';
import { env } from '@src/main/config/env'
app.listen(env.port, () => console.log(`Server is running at : http:/localhost:${env.port}`))