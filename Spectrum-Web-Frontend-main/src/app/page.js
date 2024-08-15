"use client";
import { ICONS, IMAGES, LOGOS } from "@/assets";
import CustomAvatar from "@/components/common/CustomAvatar";
import CustomButton from "@/components/common/CustomButton";
import CustomChipSelect from "@/components/common/CustomChipSelect";
import CustomCopyText from "@/components/common/CustomCopyText";
import CustomSelectableList from "@/components/common/CustomSelectableList";
import CustomTypography from "@/components/common/CustomTypography";
import LinkPreview from "@/components/display/LinkPreview";
import ProfileCard from "@/components/display/ProfileCard";
import withProtectedRoute from "@/hocs/withProtectedRoute";
import BlocknoteEditor from "@/lib/blocknote/components/BlocknoteEditor";
import BlockNoteViewer from "@/lib/blocknote/components/BlocknoteViewer";
import { Avatar, Box, Divider, Icon } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const avatarSize = 80;
const logoSize = 120;
const handleAvatarClick = (type) => {
  console.log(type);
};

function Home() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const [html, setHTML] = useState();

  const chips = [
    { value: "chip1", label: "Chip 1" },
    { value: "chip2", label: "Chip 2" },
    { value: "chip3", label: "Chip 3" },
    { value: "chip4", label: "Chip 4" },
    { value: "chip5", label: "Chip 5" },
    { value: "chip6", label: "Chip 6" },
  ];

  const listItems = [
    {
      id: 1,
      component: (
        <ProfileCard
          avatarSrc={""}
          name={"Circle 1"}
          description={"circle 1 one liner"}
        />
      ),
    },
    {
      id: 2,
      component: (
        <ProfileCard
          avatarSrc={""}
          name={"Circle 2"}
          description={
            "circle 2 one liner very importabt you knoe tthe basic hso if the so"
          }
        />
      ),
    },
    {
      id: 3,
      component: (
        <ProfileCard
          avatarSrc={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          }
          name={"Circle 3"}
          description={"circle 3 one liner"}
        />
      ),
    },
  ];

  const initialContent = [
    {
      type: "blockquote",
      props: {
        textColor: "default",
        text: "jkj",
        textAlignment: "left",
      },
      content: [
        {
          type: "text",
          text: "jkj",
          styles: {},
        },
      ],
      children: [],
    },
    {
      type: "codeblock",
      props: {
        language: "",
        text: "dsfdsf",
      },
      content: [
        {
          type: "text",
          text: "dsfdsf",
          styles: {
            code: true,
          },
        },
      ],
      children: [],
    },
    {
      type: "divider",
      props: {},
      children: [],
    },
    {
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "center",
      },
      content: [
        {
          type: "text",
          text: "/",
          styles: {},
        },
      ],
      children: [],
    },
  ];

  const defaultBlocks = [
    {
      type: "heading",
      placeholder: "Type",
      props: {
        level: 1,
      },
    },
  ];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="border-2 w-full p-4">
        <BlocknoteEditor
          initialContent={initialContent}
          defaultBlocks={defaultBlocks}
          onChangeHtml={setHTML}
          onChangeText={(data) => {}}
          showToolbar={true}
          onSave={() => console.log("Saved")}
        />
      </div>
      <div className="border-2 w-full p-4">
        <BlockNoteViewer html={html} />
      </div>
      <LinkPreview
        showUrl
        variant="side-by-side"
        url={
          "https://www.blocknotejs.org/docs/editor-api/converting-blocks#converting-blocks-to-html"
        }
      />
      <hr />
      Onboarding
      <Box className="w-[500px]">
        <Box className="flex flex-row justify-between items-center">
          <CustomTypography variant="h6" fontWeight={"bold"}>
            Connect your socials
          </CustomTypography>
          <CustomButton
            variant="text"
            color="basic"
            sx={{ fontWeight: 500, textDecoration: "underline" }}
          >
            Skip and Complete
          </CustomButton>
        </Box>

        <Box className="flex flex-row justify-between items-center">
          <Box className="center">
            <LOGOS.facebook
              size={36}
              className="mr-1"
              style={{
                filter: "grayscale(100%) contrast(600%) brightness(100%)",
              }}
            />{" "}
            <CustomTypography>Facebook</CustomTypography>
          </Box>
          <Box>
            <CustomButton>Connect</CustomButton>
          </Box>
        </Box>
        <br />
        <Box className="flex flex-row justify-between items-center">
          <Box className="center">
            <LOGOS.linkedin
              size={32}
              className="mr-2"
              style={{
                filter: "grayscale(100%) contrast(100%) brightness(-90%)",
              }}
            />{" "}
            <CustomTypography>Linkedin</CustomTypography>
          </Box>
          <Box>
            <CustomButton>Connect</CustomButton>
          </Box>
        </Box>

        <Divider />
        <Box className="flex flex-row justify-between items-center">
          <CustomTypography>Invite your friends</CustomTypography>

          <Box>
            <CustomButton>Connect</CustomButton>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className="w-[600px] bg-white p-6 rounded-lg shadow-lg my-10">
        <CustomTypography variant="h4" sx={{ mb: 1 }}>
          Invite
        </CustomTypography>
        <CustomTypography variant="p" gutterBottom>
          Share the excitement with your friends! Invite to join{" "}
          <strong>platformname</strong> and embark on this journey together!
        </CustomTypography>
        <br />
        <br />
        <CustomCopyText
          text={
            "API reference docs for the React Avatar component. Learn about the props, CSS, and other APIs of this exported module."
          }
        />

        <Box className="flex justify-around items-center mt-8">
          <CustomAvatar
            size={avatarSize}
            title={"Embed"}
            onClick={() => handleAvatarClick("Embed")}
          >
            <ICONS.embed_stroke size={30} />
          </CustomAvatar>
          <CustomAvatar
            size={avatarSize}
            title={"Whatsapp"}
            onClick={() => handleAvatarClick("Whatsapp")}
          >
            <LOGOS.whatsapp size={logoSize} />
          </CustomAvatar>
          <CustomAvatar
            size={avatarSize}
            title={"Facebook"}
            onClick={() => handleAvatarClick("Facebook")}
          >
            <LOGOS.facebook size={logoSize} />
          </CustomAvatar>
          <CustomAvatar
            size={avatarSize}
            title={"X"}
            onClick={() => handleAvatarClick("X")}
          >
            <LOGOS.x size={logoSize} />
          </CustomAvatar>
        </Box>
      </Box>
      <Divider />
      <CustomChipSelect chips={chips} />
      <CustomSelectableList items={listItems} />
    </main>
  );
}

export default withProtectedRoute(Home);
