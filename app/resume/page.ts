import { redirect } from "next/navigation";

import { getPhotoUrl } from "@/firebase/db/photo";

const Page = async () => {
  const resumeUrl = await getPhotoUrl("Chengxiang-Wu-Resume-2024.pdf");

  redirect(resumeUrl);

  return null;
};

export default Page;
