import Head from 'next/head'

import {
  IconAdd,
  IconAdvanceSearch,
  IconUser,
  IconSocialTwitter,
  IconSocialLinkedIn,
  IconSocialFacebook,
  IconSocialInstagram,
  IconSearch,
  IconSavedSearch,
  IconNotifications,
  IconLibrary,
  IconLink,
  IconMore,
  IconMenu,
  IconLogout,
  IconHome,
  IconHide,
  IconGlobal,
  IconFilter,
  IconEmail,
  IconEdit,
  IconDelete,
  IconClose,
  IconClear,
  IconCite,
  IconCatagories,
  IconBookmark,
  IconCalendarPlus,
  IconModeDark,
  IconModeLight,
  IconArrowDown,
  IconArrowUp,
  IconArrowLeft,
  IconArrowRight,
} from 'components/icons'

import {
  ButtonFab,
  Input,
  Select,
  Switch,
  CheckBox,
  ActionItem,
  Space,
  Logo,
} from 'components/atoms'

import {
  SubTitle,
  SearchResultItem,
  CardCurated,
  CardMagazine,
  CardSubject,
  Accordion,
  ReadMore,
  SearchForm,
  ContentStats,
  UspItem,
  Pricing,
  Testimonial,
  NextArticle,
  SeeAll,
} from 'components/molecules'

import {
  Header,
  LayeredNavigation,
  SearchResults,
  Publishers,
  Stats,
  Usps,
  MagazineWidget,
  Curated,
  EmailSubscription,
  GetStartedWithUs,
  Testimonials,
  Footer,
} from 'components/organisms'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zendy, Premium research publications library</title>
      </Head>
      <section>
        <p>This is good starting point</p>
      </section>

      <section>
        <h1>Title/1</h1>
        <Space />
        <h2>Title/2</h2>
        <Space />
        <h3>Title/3</h3>
        <Space />
        <h4>Title/4</h4>
        <Space />

        <p>Regular</p>
        <Space />
        <p className={'mute'}>Regular mute</p>
        <Space />
        <small>Small</small>
        <Space />
        <small className={'mute'}>Small mute</small>
        <Space />
        <SubTitle title="Sub title" />
      </section>

      <section>
        <Space size={1} style={{ background: 'red' }} />
        <Space size={2} style={{ background: 'red' }} />
        <Space size={3} style={{ background: 'red' }} />
        <Space size={4} style={{ background: 'red' }} />
        <Space size={5} style={{ background: 'red' }} />
        <Space size={6} style={{ background: 'red' }} />
        <Space size={7} style={{ background: 'red' }} />
      </section>

      <section>
        <ActionItem type="btn__default" onClick={() => alert('go')} />
        <Space />
        <ActionItem type="btn__secondary" onClick={() => alert('go')} />
        <Space />
        <ActionItem type="btn__primary" onClick={() => alert('go')} />
        <Space />
        <ActionItem type="btn__default" icon={<IconAdd />} />
        <Space />
        ------
        <Space />
        <ActionItem type="link__title" text="Title link" />
        <Space />
        <ActionItem text="Title link" />
        <Space />
        <ActionItem type="link__small" text="Small link" />
        <Space />
        <ActionItem icon={<IconArrowDown />} />
        <Space />
      </section>

      <section>
        <Logo />
        <IconAdd />
        <IconAdvanceSearch />
        <IconUser />
        <IconSocialTwitter />
        <IconSocialLinkedIn />
        <IconSocialFacebook />
        <IconSocialInstagram />
        <IconSearch />
        <IconSavedSearch />
        <IconNotifications />
        <IconLibrary />
        <IconLink />
        <IconMore />
        <IconMenu />
        <IconLogout />
        <IconHome />
        <IconHide />
        <IconGlobal />
        <IconFilter />
        <IconEmail />
        <IconEdit />
        <IconDelete />
        <IconClose />
        <IconClear />
        <IconCite />
        <IconCatagories />
        <IconBookmark />
        <IconCalendarPlus />
        <IconModeDark />
        <IconModeLight />
        <IconArrowDown />
        <IconArrowUp />
        <IconArrowLeft />
        <IconArrowRight />
      </section>

      <section>
        {/* <Button text="Subscribe -->" onClick={() => {}} /> */}

        <ActionItem text={'This is title link'} href={'/'} type="link__title" />
        <ActionItem text={'This is default link'} href={'/'} />
        <ActionItem
          text={'This is default link'}
          href={'/'}
          icon={<IconLibrary />}
        />
        <ActionItem text={'This is small link'} href={'/'} type="link__small" />
        <br />
        <ActionItem
          text={'Start your Free Trial'}
          href={'#'}
          type="btn__primary"
        />
        <ActionItem
          text={'Start your Free Trial'}
          href={'#'}
          type="btn__secondary"
        />
        <ActionItem
          text={'Start your Free Trial'}
          href={'#'}
          icon={<IconLibrary />}
        />
        <ButtonFab icon={<IconLibrary />} small />
        <ButtonFab icon={<IconLibrary />} />
      </section>

      <section>
        <Input
          id="firstNameTwo"
          name="name"
          label={'First name'}
          type="text"
          autoComplete="name"
          required
        />
        <Select
          id="primaryInterest"
          name="name"
          label={'Primary interest'}
          data={['None', 'Mathematics']}
        />
        <CheckBox
          id="termsAndConditions"
          name="name"
          label={'I have read and agreed with Zendy Terms & Conditions'}
        />
        <Switch
          checked
          id="themeMode"
          name="themeMode"
          leftLabel={<IconModeLight />}
          rightLabel={<IconModeDark />}
        />
        <Testimonial
          quote="“Zendy is an excellent resource, and can be especially useful to keep up with latest devolopmets legal comunity.”"
          name="Bolta Zayed"
          title="some title"
        />
        <NextArticle
          url="/"
          prev
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </section>
      <section>
        <ReadMore
          id="ReadMore1"
          content={
            <div>
              <Space size={3} />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomized words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomized words which don't look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomized words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
              </p>
            </div>
          }
        />
        <Space size={5} />

        <Accordion
          id="qa1"
          title={<h4>How does the free trial work?</h4>}
          content={
            <div>
              <Space size={3} />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomized words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          }
        />
      </section>
      <section>
        <CardCurated
          href={'/'}
          img={'https://picsum.photos/300/200'}
          title="Water : towards a culture of supper responsibility long text"
          content="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive ef..."
        />

        <SearchResultItem
          id="313sa21"
          href={'/'}
          journal="abc title"
          year="2020"
          author={[]}
          keywords={['key']}
          subjects={['subject']}
          link={[]}
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
          abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
        />

        <CardMagazine
          href={'/'}
          img={'https://picsum.photos/200/300'}
          title="Magazine name"
          content="Sep2019, Vol. 73 Issue 9"
        />

        <CardSubject href={'/'} title="Magazine name" />

        <SearchForm />
        <ContentStats stat="16.3m +" title="Magazines" />
      </section>
      <section>
        <UspItem
          src="/infoIcon/fullText.svg"
          title="Unlimited downloads"
          content="Freedom to save content offline and read content as you like"
        />
        <Pricing />
      </section>

      <section>
        <Header />
        <LayeredNavigation />
        <SearchResults />
        <Publishers />
        <Stats />
        <Usps />
        <MagazineWidget />
        <Curated />
        <EmailSubscription />

        <Testimonials />
        <Space size={6} />
        <GetStartedWithUs />
        <Space size={6} />
        <Footer />
      </section>
    </div>
  )
}
