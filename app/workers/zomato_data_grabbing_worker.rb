class ZomatoDataGrabbingWorker
  include Sidekiq::Worker
  include Faraday

  def perform(*args)
    logger.info 'Start Downloading Data From Zomato'

    begin
      ZomatoDataGenerator.download_zomato_data(ZomatoDataReader.new)
    rescue Error => error
      logger.fatal error
    end

    logger.info 'Done Downloading Data From Zomato...'
  end
end
