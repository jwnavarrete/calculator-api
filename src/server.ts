import app from './app';
import 'dotenv/config';

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;