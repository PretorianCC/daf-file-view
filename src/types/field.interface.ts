export interface Field {
  fileVersion: string;                              // Версия файла (3) E01
  mdiLocationIdentifier: string;                    // Идентификатор местоположения MDI (5)
  partNumber: string;                               // Номер детали (20)
  supersedingPartNumber: string;                    // Замена номера детали (20)
  onHandQuantity: number;                           // Количество в наличии (8/2)
  onOrderQuantity: number;                          // Количество по заказу (8/2)
  jobQuantity: number;                              // Количество работ (6)
  quantityAllocatedToCustomers: number;             // Количество, присвоенное клиентами (8/2)
  currentWeekNetDemand: number;                     // Чистая потребность на текущей неделе (8/2)
  currentWeekLostSales: number;                     // Потерянные продажи на текущей неделе (8/2) 00000000
  currentWeekNetLines: number;                      // Вес в нетто текущей недели (6)
  currentWeekPositiveLines: number;                 // Положительные строки текущей недели (6)
  currentWeekPositiveLinesDirectAvailable: number;  // Прямые положительные линии текущей недели доступны (6) 000000
  currentWeekRushOrderLinesToSupplier: number;      // Заказ на текущую неделю для поставщика (6) 000000
  currentWeekStockOrderLinesToSupplier: number;     // Заказ запаса на текущей неделе для поставщика (6) 000000
  totalNetDemandPast52Weeks: number;                // Чистый спрос за последние 52 недели (8/2)
  totalLostSalesPast52Weeks: number;                // Количество потерянных продаж за последние 52 недели (8/2) 00000000
  totalNetLinesPast52Weeks: number;                 // Вес в нетто последние 52 недели (6)
  purchasingPriceInEuro: number;                    // Закупочная цена в евро (7/2)
  purchasingPriceInLocalCurrency: number;           // Закупочная цена во внутренней валюте (10/2)
  unitOfMeasureOfSupplier: string;                  // Единица измерения поставщика (10)
  packagingUnitOfSupplier: number;                  // Единица упаковки поставщика (5)
  vendorSupplierCode: string;                       // Код поставщика (6)
  minimumStockLevel: number;                        // Минимальный уровень запаса (6) 000000
  maximumStockLevel: number;                        // Максимальный уровень запаса (6) 000000
  unitOfMeasureOfDealer: string;                    // Единица измерения дилера (10)
  unitOfMeasureFactor: number;                      // Коэффициент единицы измерения (7/2)
  deliveryTimeOfSupplier: number;                   // Срок поставки Поставщика (дней) (3) 000
  binLocation: string;                              // Местоположение ячейки (10)
}