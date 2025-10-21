import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const departments = [
    {
      name: "Терапия",
      description: "Диагностика и лечение общих заболеваний",
      icon: "Activity"
    },
    {
      name: "Хирургия",
      description: "Плановые и экстренные операции",
      icon: "Scissors"
    },
    {
      name: "Кардиология",
      description: "Заболевания сердечно-сосудистой системы",
      icon: "Heart"
    },
    {
      name: "Педиатрия",
      description: "Медицинская помощь детям",
      icon: "Baby"
    },
    {
      name: "Неврология",
      description: "Диагностика и лечение нервной системы",
      icon: "Brain"
    },
    {
      name: "Офтальмология",
      description: "Лечение заболеваний глаз",
      icon: "Eye"
    }
  ];

  const doctors = [
    {
      name: "Иванова Елена Петровна",
      specialty: "Главный врач, терапевт",
      experience: "25 лет стажа",
      image: "https://cdn.poehali.dev/projects/d2210b33-9cdc-4f69-a723-f14f68eda2ee/files/78e9fbd9-1f16-4779-b860-0fcc383921a2.jpg"
    },
    {
      name: "Смирнов Андрей Викторович",
      specialty: "Хирург высшей категории",
      experience: "18 лет стажа",
      image: "https://cdn.poehali.dev/projects/d2210b33-9cdc-4f69-a723-f14f68eda2ee/files/78e9fbd9-1f16-4779-b860-0fcc383921a2.jpg"
    },
    {
      name: "Петрова Анна Сергеевна",
      specialty: "Кардиолог",
      experience: "15 лет стажа",
      image: "https://cdn.poehali.dev/projects/d2210b33-9cdc-4f69-a723-f14f68eda2ee/files/78e9fbd9-1f16-4779-b860-0fcc383921a2.jpg"
    },
    {
      name: "Кузнецов Дмитрий Александрович",
      specialty: "Педиатр",
      experience: "12 лет стажа",
      image: "https://cdn.poehali.dev/projects/d2210b33-9cdc-4f69-a723-f14f68eda2ee/files/78e9fbd9-1f16-4779-b860-0fcc383921a2.jpg"
    }
  ];

  const schedule = [
    { day: "Понедельник", hours: "8:00 - 20:00", emergency: "Круглосуточно" },
    { day: "Вторник", hours: "8:00 - 20:00", emergency: "Круглосуточно" },
    { day: "Среда", hours: "8:00 - 20:00", emergency: "Круглосуточно" },
    { day: "Четверг", hours: "8:00 - 20:00", emergency: "Круглосуточно" },
    { day: "Пятница", hours: "8:00 - 20:00", emergency: "Круглосуточно" },
    { day: "Суббота", hours: "9:00 - 18:00", emergency: "Круглосуточно" },
    { day: "Воскресенье", hours: "9:00 - 16:00", emergency: "Круглосуточно" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Cross" size={32} className="text-accent" />
            <div>
              <h1 className="text-2xl font-bold">Медицинский Центр</h1>
              <p className="text-sm opacity-90">Здоровье в надёжных руках</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-accent transition-colors">Главная</a>
            <a href="#departments" className="hover:text-accent transition-colors">Отделения</a>
            <a href="#doctors" className="hover:text-accent transition-colors">Врачи</a>
            <a href="#schedule" className="hover:text-accent transition-colors">Расписание</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Записаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative h-[600px] flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.poehali.dev/projects/d2210b33-9cdc-4f69-a723-f14f68eda2ee/files/0aa72b2c-cbd0-47b0-bd4a-26b8268e5321.jpg')`}}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ваше здоровье — наша забота
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Современное оборудование, опытные специалисты и индивидуальный подход к каждому пациенту
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на приём
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle>25+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Четверть века успешной работы и тысячи благодарных пациентов
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle>50+ специалистов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Врачи высшей категории с международными сертификатами
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <CardTitle>24/7 скорая помощь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Экстренная медицинская помощь круглосуточно без выходных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="departments" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши отделения</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр медицинских услуг для всей семьи
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={dept.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <CardDescription className="text-base">{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши врачи</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Команда профессионалов с многолетним опытом
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {doctor.specialty}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                    <Icon name="Briefcase" size={16} />
                    {doctor.experience}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Расписание приёма</h2>
          <p className="text-center text-muted-foreground mb-12">
            Мы работаем для вас каждый день
          </p>
          <Tabs defaultValue="regular" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="regular">Плановый приём</TabsTrigger>
              <TabsTrigger value="emergency">Экстренная помощь</TabsTrigger>
            </TabsList>
            <TabsContent value="regular">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <Icon name="Calendar" size={20} className="text-primary" />
                          <span className="font-medium">{item.day}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          <span>{item.hours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="emergency">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Icon name="AlertCircle" size={24} />
                    Круглосуточная экстренная помощь
                  </CardTitle>
                  <CardDescription>
                    Наше отделение скорой помощи работает 24/7 без выходных и праздников
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-destructive/10 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Phone" size={20} className="text-destructive" />
                        Телефон экстренной помощи:
                      </h4>
                      <p className="text-2xl font-bold text-destructive">103</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Травмпункт</h4>
                        <p className="text-sm text-muted-foreground">Круглосуточно</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Приёмное отделение</h4>
                        <p className="text-sm text-muted-foreground">Круглосуточно</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="opacity-90">г. Москва, ул. Медицинская, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="opacity-90">+7 (495) 123-45-67</p>
                  <p className="opacity-90">+7 (495) 123-45-68</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="opacity-90">info@medcenter.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="opacity-90">Пн-Пт: 8:00 - 20:00</p>
                  <p className="opacity-90">Сб-Вс: 9:00 - 18:00</p>
                  <p className="opacity-90 text-accent">Скорая помощь: 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Записаться на приём</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="" className="text-gray-900">Выберите отделение</option>
                  <option value="therapy" className="text-gray-900">Терапия</option>
                  <option value="surgery" className="text-gray-900">Хирургия</option>
                  <option value="cardiology" className="text-gray-900">Кардиология</option>
                </select>
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">© 2024 Медицинский Центр. Все права защищены.</p>
          <p className="text-sm opacity-60 mt-2">Лицензия № ЛО-77-01-012345 от 01.01.2020</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
