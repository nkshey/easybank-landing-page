import Logo from "../../ui/Logo";
import SocialMediaLinks from "../SocialMediaLinks";
import FooterNavbar from "./FooterNavbar";
import InviteButton from "../../ui/InviteButton";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-dark-blue p-10 lg:py-12">
      <div className="w-full max-w-[69.375rem] lg:flex lg:justify-between">
        <div className="flex flex-col lg:flex-row lg:gap-[8.125rem]">
          <div className="mb-8 flex flex-col items-center gap-8 lg:m-0 lg:items-start lg:justify-between lg:gap-0">
            <Logo type="light" />
            <SocialMediaLinks />
          </div>

          <FooterNavbar />
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 lg:m-0 lg:items-end lg:justify-between lg:gap-0">
          <InviteButton />
          <p className="text-[0.9375rem] font-normal leading-[1.625rem] tracking-[-0.015rem] text-white opacity-50">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
