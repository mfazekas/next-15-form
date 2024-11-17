import { ProfileForm as ProfileFormRC } from "./profile-form";
import { ProfileForm as ProfileFormNoRC } from "./profile-form-no-rc";
import { ProfileForm as ProfileFormWorkaround } from "./profile-form-workaround";

export default function Home() {
  return (
    <div className="container mx-auto max-w-80 my-10">
      <div className="flex flex-col gap-y-4">
        <div>
          <h2 className="text-2xl font-bold">React Hook Form</h2>
          <ProfileFormRC />
        </div>
        <div>
          <h2 className="text-2xl font-bold">React Hook Form (No RC)</h2>
          <ProfileFormNoRC />
        </div>
        <div>
          <h2 className="text-2xl font-bold">React Hook Form (Workaround)</h2>
          <ProfileFormWorkaround />
        </div>
      </div>
    </div>
  );
}
