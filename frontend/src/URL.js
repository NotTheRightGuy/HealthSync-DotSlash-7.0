const REMOTE_URL = "https://ec2-15-207-98-5.ap-south-1.compute.amazonaws.com";
const LOCAL_URL = "http://localhost";
const useLocal = false;
const URL = useLocal ? LOCAL_URL : REMOTE_URL;
export default URL;
